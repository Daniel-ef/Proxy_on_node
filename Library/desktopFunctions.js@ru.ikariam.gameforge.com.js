$(document).ready(function() {
    setUrlPasswordLostForm($('#serverPasswordLost :selected').val());
	updateUrlLoginForm();
	
	 // check password and show errors and secure bar
    var ratio = '';
    $('#password').keyup(function() {
		 $('#validChar').text('');
		
        //$('#securePwd').fadeIn();
        $('#securePwd').css('display','block');

        var strPass = $(this).val();
        if (strPass.length >= window.passwordMinLength) {
            $('#securePwd .valid-icon').removeClass('invalid');
            $('#securePwd').closest('.formError').addClass('valid');
        } else {
            $('#securePwd .valid-icon').addClass('invalid');
            $('#securePwd').closest('.formError').removeClass('valid');
        }
        ratio = checkPass($(this).val(), window.passwordMinLength);
        if (ratio) {
            $('#securePwdBar').css({
                width: ratio+'%'
            });
            if (ratio > 69) {
                $('#securePwd #securePwdBar').css('background-position', '0 -39px');
            } else if (ratio > 41) {
                $('#securePwd #securePwdBar').css('background-position', '0 -26px');
            } else if (ratio < 41) {
                $('#securePwd #securePwdBar').css('background-position', '0px 0px !important');
            } else {
                $('#securePwd #securePwdBar').css('background-position', '0px 0px');
            }
        } else {
            $('#securePwdBar').css({
                width: 0
            });
            $('#securePwd .valid-icon').addClass('invalid');
        }
        if ( (ratio > 49) && (strPass.length < window.passwordMinLength)) {
            $('#securePwdBar').css({
                'width':'48px',
                'background-position':'0px 0px'
            });
        }	
    });
	
    // change behaviour of select dropdowns
    $('#logServer').change(function() {
        updateUrlLoginForm();        
    });
	
	// Registration
    $('#regBtn').click(function(){
        var success = $('#registerForm').validationEngine({
            returnIsValid:true
        });
        $('#loginWrapper').hide();
        $('#btn-login').text(window.txt_login);
        $('#fbConnect').hide();
		
        if (success && window.disabledParallax) {
            document.registerForm.submit();
            this.disabled = true; // vgl http://drupal.org/node/138622
        }
    });
            
    // Login
    $('#loginBtn').click(function(){
        var success = $('#loginForm').validationEngine({
            promptPosition: "centerRight",
            returnIsValid: true
        });
        if(window.use_login_cookies) {
            setLoginCookie( {
                server:'#logServer',
                name:'#loginName',
                language:window.language
            });
        }
        if (success) document.forms['loginForm'].submit();
    });

    // tabs (jquery tools)
    var tabs = $("ul#menu").tabs("div#pageContent", {
        initialIndex: null,
        effect: 'ajax'
    });
    var api = tabs.data('tabs');

    // open login layer
    $("#btn-login").click(function(){
        $.validationEngine.closePrompt('.formError',true);
        if ($(this).hasClass('open')) {
            $('#loginWrapper').hide();
            $(this).removeClass('open').text(window.txt_login);
        } else {
            $('#loginWrapper').show();
            $(this).addClass('open');
            $(this).text(window.txt_close);
        }
        return false;
    });

	$("#serverPasswordLost").change(function() {
        setUrlPasswordLostForm($('#serverPasswordLost :selected').val());
   }) ;
   
    $("a.iframe").fancybox({
        showNavArrows:false,
        onStart: function() {
            $.validationEngine.closePrompt('.formError',true);
        }
    });   	

    // Trailer-Klick-Error-Ausblendung.
    $('#player').click(function(){
        $.validationEngine.closePrompt('.formError',true);
    });
	
	$('.overlay').fancybox({        
		'height' : 500,
		'onStart': function() {
			$.validationEngine.closePrompt('.formError',true);
		}
	});

	// FB Login
	$('#fbBtn').click(function() {
		fbLogin();
	});	

    /* change registration name onclick */
    $('#altNames input').click(function() {
        $('#registerName').val(this.value);
    });

    /* unset altName radio on click */
    $('#registerName').click(function() {
        $('input[name=altName]:checked').removeAttr("checked");
    });

    // validation stuff
    $.validationEngineLanguage.newLang();
    $("#registerForm").validationEngine({
        validationEventTriggers:"keyup blur focus",
        promptPosition: "centerRight",
        scroll: false
    });

	$("#pwLostForm").validationEngine({
        validationEventTriggers:"keyup blur",
        promptPosition: "centerRight",
        scroll: false
    });
	
	$("#fbRegisterForm").validationEngine({
        validationEventTriggers:"keyup blur",
        promptPosition: "centerRight",
        scroll: false
    });
		
    $.validationEngineLanguage.newLang();
    $("#loginForm").validationEngine({
        promptPosition: "centerRight",
        scroll: false
    });
         
	// vertical text align for short headers (e.g. italy)
	if ($('#registerForFree').html().length <= 22) {
        $('#registerForFree').css('line-height', '51px');
	}
});

function showPasswordLost(url, result) {
    result = (result != null) ? '/?result=' + result : '';
    $('#menu .current').removeClass('current');
    $.validationEngine.closePrompt('.formError',true);
    $('#loginWrapper, #pageContent').hide();
    $('#fbConnect, #pageContent').hide();
    $('#extraContent').load(url + result).show();
}

function showFbRegistration(callback) {
    callback = (callback != null) ? callback : 'void()';
    $.validationEngine.closePrompt('.formError',true);
    $('form#registerForm').css('display','none');
    $('form#fbRegisterForm').css('display','block');
    callback;
}

function setUrlLoginForm(url) {
    $("#loginForm").attr("action", "http://" + url + "/index.php?action=loginAvatar&function=login");
}

function setUrlPasswordLostForm(url) {
    $("#pwLostForm").attr("action", "http://" + url + "/index.php?action=newPlayer&function=sendPassword");
}

function updateUrlLoginForm() {
    var logServer = $('#logServer :selected');
    setUrlLoginForm(logServer.val());
}