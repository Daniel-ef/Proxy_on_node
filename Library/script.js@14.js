/* Author: Emil Säll, Oakwood */

// ow object
var ow = {
	scrollY: 0,
	isWebkit: (/(WebKit)/i).test(navigator.userAgent),
	isTouch: Modernizr.touch,
	isTicking: false,
	isOldie: $('html').hasClass('lt-ie9'),

	// sku viewer functions
	skuHeight: 600,
	skuSticky: false,
	currentSku: -1,
	
	// sprite animations object
	skuSprites: {},

	skuInit: function () {
		ow.$modelContainer = $('#model');
		ow.$skuContainer = $('.sku-viewer');
		ow.$skuChildren = ow.$skuContainer.children();
		ow.$specification = ow.$skuContainer.next();

		// set reversed z-index on skus to get first one on top
		ow.$skuChildren.each(function(i){
			$(this).css('z-index', ow.$skuChildren.length - i);
		});
		
		if (!ow.isTouch) {
			/* DESKTOP VERSION */
			
			// set faked scroll height
			ow.$modelContainer.height(ow.$skuChildren.length * ow.skuHeight + ow.$specification.outerHeight());
			
			// fake scrollbar for lion and moutain lion with trackpads...
			if ( getScrollBarWidth() == 0 ) {
				$('html').append('<div id="fake-scrollbar"></div>');
				$('#model-menu').css('right', 14);
			}

			// drag-to-scroll (animate on html for IE&FF, body for webkit)
			$(ow.isWebkit ? 'body' : 'html').dragscrollable({dragSelector: '.sku-viewer'});

			// onscroll
			$(window).scroll( ow.skuScrollRequest );

		} else {
			/* TOUCH VERSION */
			
			// wrap content TODO: smarter selector
			$('[role=main], #model-overview, #footer').wrapAll('<div id="touchwrap">');

			// disable native scroll
			var $body = $('body');
			$body.css('overflow', 'hidden');

			// fake scroll data
			var dragged = 0,
			    momentum = 0,
			    prevdrag = 0,
			    prevmomentum = 0,
			    inertia, lastDragTime;

		    ow.maxScroll = $('#touchwrap').height() + ($('.sku').length - 1) * ow.skuHeight - window.innerHeight + 29,

			// add drag listener
			$body.hammer({
				drag_min_distance:0
			}).bind("drag", function(ev) {
				dragged = -ev.distanceY;
				momentum = dragged + prevdrag;
				
				// where we at?
				var newY = ow.scrollY + (dragged-prevdrag);
				if (newY < 0) {
					newY = 0
				} else if(newY > ow.maxScroll) {
					newY = ow.maxScroll;
				}

				if(dragged != prevdrag && newY >= 0 && newY <= ow.maxScroll) {
					ow.scrollY = newY;
					ow.skuAnimate();
					prevdrag = dragged;
					lastDragTime = Date.now();
				}
				inertia = (momentum - prevmomentum);
				prevmomentum = momentum;

			});
			
			// end drag listener
			$body.hammer().bind("touchend", function(ev) {

				// should we kick of inertia animation?
				if( Math.abs(inertia) > 5 && Date.now() - lastDragTime < 100 ) {
					ow.skuTouchInertia(inertia);
				}

				// reset values
				dragged = 0,
			    momentum = 0,
			    prevdrag = 0,
			    prevmomentum = 0,
			    inertia;

			});
			
			// kill animation on touch
			$body.bind("touchstart", function(ev) {
				// make sure window scrollbar is at top
				$(window).scrollTop(0);

				ow.stopInertia = true;
			});
		}
		
		// set up animated sprites
		$('[data-frames]').each(function (i) {
			// store in object
			ow.skuSprites[$(this).parent().index() + ow.$skuChildren.length] = {
				element: $(this),
				height: $(this).height(),
				offset: $(this).data('offset'),
				frames: $(this).data('frames'),
				current: 0
			};
		});
		
		// set up menu
		$modelmenu = $('#model-menu');
		$menuItems = $modelmenu.children();

		// loop through to calculate top position
		ow.skuHashes = {};
		var colorHeight = 0, 
			totalHeight = 0, 
			specTotal = 0, 
			specHeight = $menuItems.eq(0).height(),
			specIndex;

		$menuItems.each(function (i) {
			// does it have a color icon? use that hash, other first a
			var $color = $('.icon', this);

			if ($color.length) {
				// it is a color sku item
				var hash = $('.icon', this).attr('href');
				
				if ( i == 1 ) {
					// first color item
					$(this).data('top', specHeight);
					specTotal += specHeight;
				} else {
					$(this).data('top', totalHeight);
				}
				colorHeight += $(this).height();
			} else {
				// it's a specification part
				var hash = $('a', this).attr('href');

				// set top
				$(this).data('top', specTotal);
				specTotal += $(this).height();
				
				// store index for color span calculation
				if(i > 1 && !specIndex) specIndex = i;
			}
			totalHeight += $(this).height();
			
			// store in object
			ow.skuHashes[i] = hash.substr(1);
			
		});
		
		// loop through backwards to calculate bottom position
		var totalHeight = 0, specTotal = 0;
		$.fn.reverse = [].reverse;

		// skip first one, it's always at top
		$menuItems.slice(1).reverse().each(function (i) {
			totalHeight += $(this).height();
			
			if ($('.icon', this).length) {
				// it is a color sku item
				
				// is it the top one?
				if ( $('.colors', this).length ) {
					$(this).data('bottom', ow.skuHeight - specTotal - specHeight);
				} else {
					$(this).data('bottom', ow.skuHeight - totalHeight);
				}
			} else {
				// it's a specification part
				specTotal += $(this).height();
				$(this).data('bottom', ow.skuHeight - specTotal);
			}
			
			$(this).css('top', $(this).data('bottom'));
		});
		
		// store menu info in ow
		ow.$menuItems = $menuItems;
		ow.$modelMenu = $modelmenu;
		ow.colorsVisible = false;
		ow.colorsBottom = ow.skuHeight - ($menuItems.eq(1).data('bottom') - (colorHeight - specHeight));
		ow.colorsTop = specIndex * ow.skuHeight - colorHeight - specHeight;
		
		// click listener
		$modelmenu.on('click', 'a', function (e) {
			e.preventDefault();

			// which step?
			var goto = $(this).closest('div').index(),
				steps = Math.abs( ow.currentSku - goto ),
				duration = steps ? 400 * steps : 100;
			
			if(!ow.isTouch) {
				// desktop, animate scroll
				$(ow.isWebkit ? 'body' : 'html').animate({scrollTop: goto * ow.skuHeight}, duration, 'easeOutQuint');

			} else {
				// touch, fake scroll

				// set start values
				var difference = goto * ow.skuHeight - ow.scrollY,
					start = ow.scrollY,
					starttime = new Date().getTime();
					ow.stopInertia = false;

				// loop it
				function loop(now){
					var passedTime = now - starttime;
					ow.scrollY = ow.easeOut(passedTime, start, difference, duration);
					ow.skuAnimate();
		
					// keep on looping? (don't stop if: not asked to stop, not reached goal, time left)
					if(!ow.stopInertia && Math.round(ow.scrollY) != ow.scrollY + difference && passedTime < duration) requestAnimationFrame(loop);		
		
				}
				requestAnimationFrame(loop);
			}

			// if it is a spec link, set to active
			$clicked = $(this);
			if($clicked.hasClass('sprite')) {
				$clicked.addClass('active');
				setTimeout(function () {
					$clicked.removeClass('active');
				}, duration)
			}

		});
		
		// other color
		$('.other-colors').on('click', 'a', function (e) {
			e.preventDefault();
			$modelmenu.find('.' + $(this).attr('href').substr(1)).eq(0).click();
		});

		// ready to display it
		$modelmenu.addClass('hidecolors').css('visibility', 'visible');

		// is there a hashbang already?
		if(window.location.hash) {
			// fake menu click
			$modelmenu.find('.' + window.location.hash.substr(1)).eq(0).click();
		}
		
		ow.skuAnimate();
		
	},
	
	skuTouchInertia: function (inertiaBase) {
		// set start values
		var inertia = inertiaBase * 20,
			duration = Math.abs(inertiaBase) * 25,
			start = ow.scrollY,
			starttime = new Date().getTime();
			ow.stopInertia = false;
		
		// loop it
		function loop(now){
			var passedTime = now - starttime;
			ow.scrollY = ow.easeOut(passedTime, start, inertia, duration);
			if(ow.scrollY > ow.maxScroll) ow.scrollY = ow.maxScroll;
			ow.skuAnimate();

			// keep on looping? (don't stop if: not asked to stop, not reached goal, time left, page left)
			if(!ow.stopInertia && Math.round(ow.scrollY) != ow.scrollY + inertia && passedTime < duration && ow.scrollY > 0 && ow.scrollY < ow.maxScroll) requestAnimationFrame(loop);		

		}
		requestAnimationFrame(loop);
		
	},

	easeOut: function (t, b, c, d) {
		t /= d;
		t--;
		return c*(t*t*t*t*t + 1) + b;
	},
	
	skuScrollRequest: function () {
		// modern browser?
		if(Modernizr.raf) {
			// avoid requesting unneccesary animation frames
			if(!ow.isTicking) {
				ow.scrollY = $(window).scrollTop();
				requestAnimationFrame(ow.skuAnimate);
			}
			ow.isTicking = true;
		} else {
			// hello IE!
			ow.scrollY = $(window).scrollTop();
			ow.skuAnimate();
		}
	},
	
	skuAnimate: function () {
		ow.isTicking = false;

		// current step
		var currentSku = Math.floor( ow.scrollY / ow.skuHeight ),
			skuScroll = ow.skuHeight * (currentSku + 1) - ow.scrollY,
			newSku = false;

		// is this a new step?
		if(currentSku != ow.currentSku) {
			ow.currentSku = currentSku;
			newSku = true;
		}

		// are we in sku territory?
		if(ow.scrollY < (ow.$skuChildren.length - 1) * ow.skuHeight) {
			// yes we are
			if (ow.skuSticky == true) {
				ow.skuSticky = false;
				// stick content and mask spec texts
				ow.$modelContainer.removeClass('unstick');
				ow.$skuContainer.add(ow.$specification).removeAttr('style');
				
				$('#touchwrap').removeAttr('style');
				
			}

			// are we on a new sku?
			if(newSku) {
				// reset classes
				ow.$skuChildren.attr('class', 'sku');

				// skus above
				if(ow.currentSku > 0) ow.$skuChildren.slice( 0, ow.currentSku ).addClass('folded');

				// skus below
				ow.$skuChildren.slice(ow.currentSku + 1).addClass('unfolded').height(ow.skuHeight-1);
			}

			// adjust height of current sku
			ow.$skuChildren.eq(ow.currentSku).addClass('current').height( skuScroll - 1 );


		} else {
			// below the skus

			// first arrival in specification territory?
			if (ow.skuSticky == false) {
				ow.skuSticky = true;

				// fold all skus
				ow.$skuChildren.attr('class', 'sku').slice( 0, ow.$skuChildren.length-1 ).addClass('folded');

				// unstick and unmask spec texts
				ow.$modelContainer.addClass('unstick');

				if(!ow.isTouch) {
					// offset containers for desktop bliss
					ow.$skuContainer.css('top', (ow.$skuChildren.length - 1) * ow.skuHeight + 50);
					ow.$specification.css('top', (ow.$skuChildren.length) * ow.skuHeight + 50);
				}
			}
			
			if(ow.isTouch){
				// offset container on touch
				var offset = -(ow.scrollY - (ow.$skuChildren.length - 1) * ow.skuHeight);
				$('#touchwrap').css('transform', 'translate(0, ' + offset +'px) scale(1) translateZ(0px)');
			}
			
			// sprite animation (animate on sku above)
			if(ow.skuSprites[ow.currentSku + 1]) {
				var sprite = ow.skuSprites[ow.currentSku + 1],
					skuPosition = (ow.scrollY - ow.currentSku * ow.skuHeight) - sprite.offset,
					spriteStep = Math.floor(skuPosition / ((ow.skuHeight - sprite.offset) / sprite.frames));

				if (spriteStep >= 0 && spriteStep != sprite.current) {
					// update sprite
					sprite.current = spriteStep;
					sprite.element.css('background-position', '0 -' + spriteStep * sprite.height + 'px');
				}
			}
		}
		
		// model menu
		if(newSku && ow.skuHashes[ow.currentSku]) {
			// set hash to current sku
			location.replace('#' + ow.skuHashes[ow.currentSku]);

			// icons below
			ow.$menuItems.slice(ow.currentSku + 1).each(function () {
				$(this).css('top', $(this).data('bottom'));
			});

			// icons below
			if(ow.currentSku > 0) {
				ow.$menuItems.slice(1, ow.currentSku + 1).each(function () {
					$(this).css('top', $(this).data('top'));
				});
			}

			// calculate span for current icon
			ow.$currentIcon = ow.$menuItems.eq(ow.currentSku + 1);
			ow.iconBottom = parseInt(ow.$currentIcon.data('bottom'), 10),
			ow.iconTop = parseInt(ow.$currentIcon.data('top'), 10);

		}

		// position current menu item (avoid -1 because ios freaks out)
		if (ow.currentSku > -1) {
			if (skuScroll > ow.iconBottom) skuScroll = ow.iconBottom;
			if (skuScroll < ow.iconTop) skuScroll = ow.iconTop;
			
			ow.$menuItems.eq(ow.currentSku + 1).css('top', skuScroll + 'px');
		}
		
		// (un)hide colors
		if ( 
			(!ow.colorsVisible && (ow.scrollY > ow.colorsBottom && ow.scrollY < ow.colorsTop))
			|| (ow.colorsVisible && (ow.scrollY < ow.colorsBottom || ow.scrollY > ow.colorsTop))


		) {
			ow.colorsVisible = !ow.colorsVisible;
			ow.$modelMenu.toggleClass('hidecolors');
		}
		
	},
	
	newsSlideshow: function () {
		// init slideshow plugin on startpage
		$('#start-news').flexslider({
			animation: "slide",
			controlNav: false,
			slideshow: false,
			animationSpeed: 300,
			itemWidth: 310,
			itemMargin: 15,
			move: ow.isTouch ? 2 : 1
		});
	},
	
	shopping: function () {
		// listen for product form submits
		$('body').on('submit', '.productform', function (e) {
			e.preventDefault();
			
			// set ajax boolean to true
			$('[name=ajax]', this).val(1);
			
			// disable submit button and set text
			var $button = $('button', this),
				buttonText = $button.text();

			$button.width($button.width()).attr('disabled', 'disabled').text('Adding...');

			// post form
			$.post(
				$(this).attr('action'), 
				$(this).serialize(), 
				function(data){
					// update cart
					$('#cart').html(data);

					// re-enable submit button and reset text
					$button.removeAttr('disabled').text(buttonText);

				}
			);
		});
	},
	
	checkout: function() {
		// ajaxify amount & delete form
		$("#ajax-wrapper").on("click", "#basket_form :submit", function(e) {
			e.preventDefault();

			// set ajax to true and cache the button
			$("#ajax_input").val(1);
			$("#include-cart").val(1);
			
			var $this = $(this);
			
			// get action and product id
			var formdata = $('#basket_form').serialize();
			formdata += "&" + $this.attr("name") + "=" + $this.val();
			
			// do it
			updateCheckout(formdata);
		});
		
		// voucher code
		$("#ajax-wrapper").on("submit", "#voucher_form", function(e) {
			e.preventDefault();
			$(".ajax-bool", this).val(1);
			updateCheckout($(this).serialize());
		});

		// payment options
		$("#ajax-wrapper").on("change", ".checkout-payment input", function() {
			// highlight
			$(".checkout-payment .selected").removeClass('selected');
			$(this).closest("label").addClass('selected');

			// update and post form
			var $form = $("#payment_form");
			$(".ajax-bool", $form).val(1);
			$("#pay_method", $form).val($(this).val());
			updateCheckout($form.serialize());
		});
		
		// klarna logic
		$("#ajax-wrapper").on("keypress", "#reg_pnr", function(e) {
			// don't post entire form on enter
			if(e.which == 13) {
				e.preventDefault();
				// but DO post it to klarna
				$(".klarna_continue").click();
			}else {
				// clear and hide form
				$(".checkout-billing .hidden-form").slideUp(200);
			}
		});
		
		// express shipping
		$('#ajax-wrapper').on('change', '.extra .option input', function(){
				$('.option.checked').removeClass('checked');
				$(this).parents('.option').addClass('checked');
				var form = $( '#' + $(this).attr('name') );
				$.ajax({
					type: "POST",
					url: form.attr("action"),
					data: form.serialize(),
					success: function(html) {
						updateCheckout(form.serialize() + '&include-cart=1&ajax=1');
					}
				});
			});
		$("#ajax-wrapper").on("click", ".klarna_continue", function(e) {
			e.preventDefault();

			// move personal number to hidden form
			$("#pno").val($("#reg_pnr").val());
			
			// post with ajax
			$.ajax({
				type: "POST",
				url: $("#personalnumber_form").attr("action"),
				data: $("#personalnumber_form").serialize(),
				success: function(json) {
					if(json.got) {
						// found person! fill out the form
						$("#reg_name").val(json.firstname);
						$("#reg_sname").val(json.lastname);
						$("#reg_address").val(json.address);
						$("#reg_zipcode").val(json.zipcode);
						$("#reg_city").val(json.city);

						// and show it
						$(".checkout-billing .hidden-form").slideDown(200);
					}else {
						// no hit
						$("#reg_pnr").closest("div").addClass("error");
					}
				},
				dataType: 'json'
			});

		});
		
		// country selector (from billing information)
		$("#ajax-wrapper").on("change", "#reg_cou_id, #pp_cou_id", function() {
			// Check if the optional shipping selector is active
			var blockPost = ( $("#use_billing_shipping:not(:checked)").length ) ? true : false;
			// update and post form
			if( !blockPost ){
				var $form = $("#shipping_form");
				$(".ajax-bool", $form).val(1);
				$("#cou_id", $form).val($(this).val());
				$("#original_cou_id", $form).val($(this).val());
				$(".use_billing_shipping-bool", $form).val(1);
				updateCheckout($form.serialize());
			}
			else{
				var $form = $("#submit_form");
				$("#original_cou_id", $form).val($(this).val());
			}		
		});

		// country selector (from the optinal shipping)
		$("#ajax-wrapper").on("change", "#reg_shi_cou_id", function() {
			// update and post form
			var $form = $("#shipping_form");
			$(".ajax-bool", $form).val(1);
			$("#cou_id", $form).val($(this).val());
			$("#original_cou_id", $form).val($('#reg_cou_id').val());
			$(".use_billing_shipping-bool", $form).val(0);
			updateCheckout($form.serialize());			
		});

		// use optional shipping
		$("#ajax-wrapper").on("change", "#use_billing_shipping", function() {
			if( $(this).is(':checked') ){
				$('#optional_shipping_container').addClass('hidden');
				$('#reg_use_shi').val('0');

				var update = $('#prioritize_alternative_shipping').val();
				$('#prioritize_alternative_shipping').val('0');
				
				// update cart when cancelling optional shipping but not on pageload
				if(update == 1) {
//					updateCheckout( $("#shipping_form").serialize() );
					$('#reg_cou_id, #pp_cou_id').change();
				}
			}
			else{
				$('#optional_shipping_container').removeClass('hidden');
				$('#reg_use_shi').val('1');
				$('#prioritize_alternative_shipping').val('1');
			}
		});
		// position submit on load
		$('#use_billing_shipping').change();

		// reverse use optional shipping
		$("#ajax-wrapper").on("change", "#reverse_use_billing", function() {
			$('#use_billing_shipping').click();
		});
		/*(injectReverseOptionalShipping = function () {
			if(!$('#reverse_use_billing').length) $('#use_billing_shipping').hide().after('<input type="checkbox" id="reverse_use_billing" name="reverse_use_billing">').closest('label').attr('for', 'reverse_use_billing');
			$('#reverse_use_billing').attr('checked', !$('#use_billing_shipping').attr('checked'))
		})();*/

		function updateCheckout(formdata) {
			$.ajax({
				type    : 'POST',
				data    : formdata + "&" + $("#submit_form input[type=text]").serialize(), // attach text field values to keep user happy
				success : function(html){
					// update main content
					$("#ajax-wrapper").html(html);
					
					// update cart in header if provided
					if($("#hidden-shopping-cart").length) $("#cart").html($("#hidden-shopping-cart").html());
				}
			});
		}
		
		// remove error color on type
		$("#ajax-wrapper").on("keypress", ".error input[type=text]", function(e) {
			$(this).closest("div.error").removeClass("error");
		});
		
		// print button...
		$("#print").click(function(e) {
			e.preventDefault();
			window.print();
		});
		
		$('body').on('click', '.toggle-voucher', function(){
			
			$('.gift-voucher').toggleClass('hidden');
			$('.toggle-voucher-on, .toggle-voucher-off').toggle();
			
		});
	},

	addToCart: {
		init: function() {
			$('body').on("submit", ".productform", ow.addToCart.add);
		},
		add: function(e) {
			e.preventDefault();
			
			// set ajax boolean to true
			$('[name=ajax]', this).val(1);
			
			// disable submit button and set text
			var $button = $('button', this),
				buttonText = $button.text(),
				addedHtml = '<div class="added"><img class="addedprod" src="' + $(this).data('cartimg') + '" height="100">' + $(this).data('carttext') + '<img src="' + $(this).data('carticon') + '" height="16"></div>';

			$button.width($button.width()).attr('disabled', 'disabled').text('Adding...');

			// post form
			$.post(
				$(this).attr('action'), 
				$(this).serialize(), 
				function(data){
					// update cart
					$('#cart').html(data);

					// re-enable submit button and reset text
					$button.removeAttr('disabled').text(buttonText);
					
					// show what was added
					$(addedHtml).appendTo('#cart').delay(1600).slideUp(200, function () {$(this).remove();});
				}
			);
		}
	},

	newsletter: function(){
		// startpage box
		$('a.newsletter-link').click(function (e) {
			e.preventDefault();
			 $('.newsletter-signup').show().find('[type=email]').focus();
		});
	
		// submit via ajax
		$('body').on('submit', '.newsletter-form', function(e){
			e.preventDefault();
			
			$('.ajax-bool', this).val(1);
			var $form = $(this);

			// validate it
			var email = $('.newsletter-email', $form).val();
			var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
			var errormsg = '<span class="error">Sorry, please check the spelling and try again!</span>';
			if(!pattern.test(email)){
				// invalid
				$('button', $form).before(errormsg);
			} else {
				// valid post via ajax
				$.ajax({
					type     : 'POST',
					data     : $form.serialize(),
					url      : $form.attr('action'),
					success  : function(response){
						if(response == 'OK') {
							var $signup = $form.closest('.newsletter-signup');
							if($signup.length) {
								// hide startpage form
								$('.newsletter-link').replaceWith('<div class="newsletter-link thanks"><h3>Thanks!</h3></div>');
								$signup.hide();
							} else {
								$form.replaceWith('<h3>Thanks!</h3>');
							}
							
						} else {
							$('button', $form).before(errormsg);
						}
					}
				});
			}

		});
	},
	
	pressGallery: function () {
		// press gallery
		$('.press-gallery').on('click', 'nav a', function (e) {
			e.preventDefault();
			
			if ($(this).attr('class') == 'all') {
				// show all
				$('.press-gallery li').fadeIn(200);
			} else {
				// filter
				$('.press-gallery li').hide().filter('.' + $(this).attr('class')).fadeIn(200);
			}
			$(this).addClass('current').siblings('.current').removeClass('current');
		});
	},

	introVideo: function() {
		var wrap = $('#start-feature'),
			video = $('.intro-video');

		$('.intro-video-button').on( 'click', function(e){
			e.preventDefault();

			wrap.find('.intro, .intro-image').animate({ opacity: 0 }, 500, function(){
				video.fadeIn(500);
			});
		});

		$('.intro-video-close').on( 'click', function(e){
			e.preventDefault();

			video.fadeOut(500, function(){
				wrap.find('.intro, .intro-image').animate({ opacity: 1 }, 500 );
			});
		});
	}
};

// onload
$(function(){

	// sku viewer on model pages
	if($('#model').length) ow.skuInit();
	
	// startpage
	ow.newsSlideshow();
	
	// newsletter
	ow.newsletter();
	
	// press gallery
	ow.pressGallery();
	
	// shopping logic
	if($('body.checkout').length) ow.checkout();
	if($('.productform').length) ow.addToCart.init();
	if($('.intro-video').length) ow.introVideo();
	
});
  



