/*
---

script: NivooSlider.js

description: A nice image slider for MooTools.

license: MIT-style license

authors:
- Johannes Fischer

requires:
- core/1.3: '*'

provides:
- NivooSlider

...
 */

var NivooSlider = new Class({

    Implements: [Events, Options],

    caption: null,
	children: null,
    containerSize: 0,
	count: 4,
    currentSlide: 0,
    currentImage: '',
    effects: {
		// used for random effects
		common: ['fade', 'fold'],
		horizontal: ['sliceLeftUp', 'sliceLeftDown', 'sliceLeftRightDown', 'sliceLeftRightUp', 'sliceRightDown', 'sliceRightUp', 'wipeDown', 'wipeUp'],
		vertical: ['sliceDownLeft', 'sliceDownRight', 'sliceUpDownLeft', 'sliceUpDownRight', 'sliceUpLeft', 'sliceUpRight', 'wipeLeft', 'wipeRight']
	},
	holder: null,
	hover: false,
	interval: null,
	orientation: '',
    paused: false,
    running: false,
	slices: null,
	sliceSize: null,
    totalSlides: 0,

    options: {
        animSpeed: 500,
        autoPlay: true,
		directionNav: true,
		directionNavHide: true,
		directionNavWidth: '40px',
        effect: 'sliceDown', // TODO allow to pass an array with multiple effects
		interval: 3000,
		orientation: 'vertical',
		pauseOnHover: true,
		slices: 15,

		// not implemented yet
		directionNavPosition: 'inside|outside',
		preLoadImages: false

		//onFinish: function () {}
		//onLastSlide: function () {}
        //onStart: function () {}        
    },

    initialize: function (container, options)
    {
		this.container = $(container);

		this.setOptions(options);
		this.orientation = this.options.orientation;

		this.effects.horizontal.combine(this.effects.common);
		this.effects.vertical.combine(this.effects.common);

		this.initSlider();
		this.createSlices();
		if (this.options.autoPlay)
		{
			this.play();
		}
    },

	animate: function (slice, fxStyles, last)
    {
        var fx = slice.retrieve('fxInstance'),
            isLast = last !== undefined && last === true;

        fx.start(fxStyles).chain(function () {
			this.count += 1;
			if (this.count === this.options.slices || isLast)
			{
				this.running = false;

				// fire onFinish function
				this.finish();

				this.setBackgroundImage();
	
				this.count = 0;
				
				if (this.currentSlide === (this.totalSlides - 1))
				{
					this.lastSlide();
				}
			}
		}.bind(this));		
    },

	arrangeSlices: function (orientation)
	{
		var height,
            position,
            sliceSize,
            width;

		this.slices.each(function (el, i) {

			position = {
				left: orientation === 'vertical' ? this.sliceSize.x * i : 0,
				top: orientation === 'horizontal' ? this.sliceSize.y * i : 0
			};

			// set size & position
			if (orientation === 'horizontal')
			{
				height = i === this.options.slices - 1 ? this.containerSize.y - (this.sliceSize.y * i) : this.sliceSize.y;
				width = '100%';

				el.setStyles({
					height: height,
                    top: position.top,
                    width: width
                });
			}
			// if vertical
			else
			{
				height = 0;
				width = i === this.options.slices - 1 ? this.containerSize.x - (this.sliceSize.x * i) : this.sliceSize.x;

				el.setStyles({
					height: height,
					left: position.left,
					top: '',
                    width: width
                });
			}

            el.store('fxInstance', new Fx.Morph(el, {
                duration: this.options.animSpeed
            })).store('coordinates', Object.merge(position, {height: height, width: width}));
        }, this);
	},

	createCaption: function ()
	{
		this.caption = new Element('p', {
			styles: {
				opacity: 0
			}
		}).inject(this.holder);

		this.caption.store('fxInstance', new Fx.Morph(this.caption, {
			duration: 200,
			wait: false
		}));
	},

	createDirectionNav: function ()
	{
		var directionNavStyles,
            leftContainer,
            rightContainer,
            width;

		width = this.options.directionNavWidth;

		directionNavStyles = {
			height: this.containerSize.y,
			width: width
		};

		// create container
		leftContainer = new Element('div.direction-nav-left', {
			styles: directionNavStyles
		}).inject(this.holder);
		
		rightContainer = new Element('div.direction-nav-right', {
			styles: directionNavStyles
		}).inject(this.holder);
		
		// create controls

		this.leftNav = new Element('a', {
			events: {
				'click': function (e) {
					e.stop();
					if (this.options.autoPlay)
					{
						this.pause();
						if (!this.options.pauseOnHover)
						{
							this.play();
						}
					}
					this.previous();
				}.bind(this)	
			},
			href: '#',
			styles: {
				height: directionNavStyles.height
			}
		}).inject(leftContainer);
		
		this.rightNav = new Element('a', {
			events: {
				'click': function (e) {
					e.stop();
					if (this.options.autoPlay)
					{
						this.pause();
						if (!this.options.pauseOnHover)
						{
							this.play();
						}
					}
					this.next();
				}.bind(this)	
			},
			href: '#',
			styles: {
				height: directionNavStyles.height
			}
		}).inject(rightContainer);

		if (this.options.directionNavHide && this.options.directionNav)
		{
			$$(this.leftNav, this.rightNav).setStyle('opacity', 0);
			this.holder.addEvents({
				'mouseout': function () {
					$$(this.leftNav, this.rightNav).fade(0);
				}.bind(this),
				'mouseover': function () {
					$$(this.leftNav, this.rightNav).fade(1);	
				}.bind(this)
			});
		}
	},
    
	createLinkHolder: function ()
	{
		this.linkHolder = new Element('a.nivoo-link', {
			href: '#'
		}).inject(this.holder);
	},
	
    createSlices: function ()
    {
		this.sliceSize = {
			x: (this.containerSize.x / this.options.slices).round(),
			y: (this.containerSize.y / this.options.slices).round()
		};

		// effects that need one slice only
		if (['fade', 'wipeLeft', 'wipeRight'].contains(this.options.effect))
		{
			this.options.slices = 1;
		}

        this.options.slices.each(function (i) {	
            new Element('div.nivoo-slice').inject(this.holder);
        }, this);
		
		this.slices = this.getSlices();

		this.arrangeSlices(this.options.orientation);
    },
    
	getImages: function ()
	{
		return this.holder.getElements('img');	
	},
	
    getSlices: function ()
    {
        return this.holder.getElements('.nivoo-slice');    
    },
	
    initSlider: function ()
    {
		// wrap child elements
		this.holder = new Element('div.nivoo-slider-holder').adopt(this.container.getChildren()).inject(this.container);

        this.containerSize = this.holder.getSize();

        // Find our slider children
        this.children = this.getImages();

        this.totalSlides = this.children.length;

        this.children.setStyle('display', 'none');

        this.currentImage = this.children[0];

		// init LinkHolderand set link
		this.createLinkHolder();
		this.setLink();

        // Set first background
		this.holder.setStyle('background-image', 'url(' + this.currentImage.get('src') + ')');

		this.createCaption();

		this.showCaption();
		
		// attach pauseOnHover		
		if (this.options.pauseOnHover && this.options.autoPlay)
		{
			this.holder.addEvents({
				'mouseenter': function () {
					this.pause();
				}.bind(this),
				'mouseleave': function () {
					this.play();
				}.bind(this)
			});
		}

		// create directional navigation
		if (this.options.directionNav)
		{
			this.createDirectionNav();
		}
    },
	
	hideCaption: function ()
	{
		this.caption.retrieve('fxInstance').start({
			bottom: this.caption.getHeight() * -1,
			opacity: 0.5
		});
	},

	next: function ()
	{
		this.currentSlide += 1;

		if (this.currentSlide === this.totalSlides)
		{
			this.currentSlide = 0;
		}

		this.slide();
	},

	pause: function ()
	{
		window.clearInterval(this.interval);
	},

	play: function ()
	{
		this.interval = this.next.periodical(this.options.interval, this);
	},
	
	previous: function ()
	{
		if (this.options.autoPlay)
		{
			this.pause();
			if (!this.options.pauseOnHover)
			{
				this.play();
			}
		}

		this.currentSlide -= 1;

        if (this.currentSlide < 0)
		{
			this.currentSlide = (this.totalSlides - 1);
		}

		this.slide();
	},
	
	showCaption: function ()
	{
		var title = this.currentImage.get('title');

		if (!title)
		{
			this.hideCaption();
			return;
		}
		
		this.setCaptionText(title);

		this.caption.retrieve('fxInstance').start({
			bottom: 0,
			opacity: 1	
		});
	},
	
    slide: function (slideNo)
    {
		var coordinates,
            effect,
            orientation,
            slice,
            slices,
            styles,
            timeBuff;
		
		if (this.running)
		{
			return;
		}

		if (this.options.orientation === 'random')
		{
			orientation = ['horizontal', 'vertical'].getRandom();
		}
		else
		{
			orientation = this.options.orientation;
		}
		
		if (orientation !== this.orientation)
		{
			this.arrangeSlices(orientation);
			this.orientation = orientation;
		}

		if (slideNo !== undefined)
		{
			this.currentSlide = slideNo;
		}

        // Set currentImage
        this.currentImage = this.children[this.currentSlide];

        this.setLink();

        // Process caption
		this.showCaption();

		// TODO use this.slices within each loop instead
        slices = this.slices;
		timeBuff = 0;

		// reset slices
        this.slices.each(function (slice) {

			coordinates =  slice.retrieve('coordinates');

            slice.setStyles({
                background: 'url(' + this.currentImage.get('src') + ') no-repeat -' + coordinates.left + 'px ' + coordinates.top * -1 + 'px',
				bottom: '',
				height: coordinates.height,
				left: coordinates.left,
                opacity: 0,
				right: '',
				top: coordinates.top,
				width: coordinates.width
            });

			var property = orientation === 'horizontal' ? 'width' : 'height';

			slice.setStyle(property, 0);
        }, this);
    
		// fire onStart function
        this.start();
	
        // Run effects
        this.running = true;

		effect = this.options.effect;

		if (effect === 'random')
        {
            effect = this.effects[orientation].getRandom();
        }

		// vertical effects
        if (['sliceDownRight', 'sliceDownLeft'].contains(effect))
        {
            if (effect === 'sliceDownLeft')
            {
                slices = slices.reverse();
            }

            slices.each(function (slice) {
                slice.setStyle('top', 0);

                this.animate.delay(100 + timeBuff, this, [slice, {height: this.containerSize.y, opacity: 1}]);

                timeBuff += 50;
            }, this);
        }
        else if (['sliceUpRight', 'sliceUpLeft'].contains(effect))
        {
            if (effect === 'sliceUpLeft')
            {
                slices = slices.reverse();
            }

            slices.each(function (slice) {
                var fx = slice.retrieve('fxInstance');
                
                slice.setStyle('bottom', 0);

                this.animate.delay(100 + timeBuff, this, [slice, {height: this.cont