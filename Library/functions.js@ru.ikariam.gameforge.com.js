$(document).ready(function() {
    // onload setting of select dropdowns
    setUrlRegisterForm($('#registerServer :selected').val());
    setUrlFBLoginHref($('#fbServer :selected').attr('fburl'));
    setUrlFBRegisterForm($('#fbRegisterServer :selected').attr('fburl'));

    $("#registerServer").change(function() {
        setUrlRegisterForm($('#registerServer :selected').val());
    }) ;
	
    $("#fbServer").change(function() {
        setUrlFBLoginHref($('#fbServer :selected').attr('fburl'));
        fbLogin();
    });
    $("#fbRegisterServer").change(function() {
        setUrlFBRegisterForm($('#fbRegisterServer :selected').attr('fburl'));
    });
 
    /**
     * Buttons click behaviour
     */
	 // menu
    $("ul#menu li a").click(function(){
        $.validationEngine.closePrompt('.formError',true);
        $('#extraContent, #passwordLost, #loginWrapper').hide();
        $('#btn-login').removeClass('open').text(window.txt_login);
        $(this).removeClass('open').css('z-index', '20');
        $('#pageContent').css('display','block');
        $('ul#menu li a').removeClass('current');
        $(this).addClass('current');
    });
	
    // FB Registration
    $('#fbRegBtn').click(function(){
        fbRegister();
    });

});

function showFbRegistration(callback) {
    callback = ( callback != null ) ? callback : 'void()';
    $.validationEngine.closePrompt('.formError',true);
    $('form#registerForm').css('display','none');
    $('form#fbRegisterForm').css('display','block');
    callback;
}

function hideFbRegistration() {
    $.validationEngine.closePrompt('.formError',true);
    $('form#fbRegisterForm').css('display','none');
    $('form#registerForm').css('display','block');
    $("#registerServer").val($('#fbRegisterServer').val());
}

// check for secure pwd
function checkPass(strPass, minLen) {
    var sec = 0;
    var check = 100;
    var steps = 7;
    var checkByStep = check / steps;

    var strToCheck = '0123456789'; // check if numbers
    if (contains(strPass, strToCheck)) {
        sec++
    }
    strToCheck = 'abcdefghijklmnopqrstuvwxyz'; // check if lowercase letters
    if (contains(strPass, strToCheck)) {
        sec++
    }
    strToCheck = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // check if uppercase letters
    if (contains(strPass, strToCheck)) {
        sec++
    }
    strToCheck = '.$!;:-_#'; // check if uppercase letters
    if (contains(strPass, strToCheck)) {
        sec++
    }

    // check if at least one uppercase AND one lowercase AND one number
    if (strPass.length < minLen) sec = 0;
    if (strPass.length >= 6) sec++;
    if (strPass.length >= 8) sec++;
    if (strPass.length >= 10) sec++;

    var nCount = sec * checkByStep;

    if (nCount > check) nCount = check;

    return Math.ceil(nCount);
}

// check if string in pattern
function contains(strText, strPattern) {
    for (i = 0; i < strText.length; i++) {
        if (strPattern.indexOf(strText.charAt(i)) > -1) return true;
    }
    return false;
}

function setUrlRegisterForm(url) {
    $("#registerForm").attr("action", "http://" + url + "/index.php?action=newPlayer&function=createAvatar");
}

function setUrlFBLoginHref(url) {
    $("#fbForm").attr("action", url);
}

function setUrlFBRegisterForm(url) {
    $("#fbRegisterForm").attr("action", url);
}

function setUrlPasswordLostFormFb(url) {
    $("#pwLostFormFb").attr("action", url);
}

/**
 * Die Verwendung dieser Funktion ist möglicherweise problematisch,
 * da Mobilfunkproxies hier großen mist bauen und fremde Logindaten cachen!
 */
function setLoginCookie(fieldNames) {
    // fieldNames sollte so aussehen:
    // { server:'#logServer', name:'#loginName', password:'#loginPassword' };

    // Wir holen die Daten aus dem Login-Formular...
    var server = $(fieldNames.server).val() ;
    var username = $(fieldNames.name).attr('value') ;

    // Wir bauen einen schönen String aus unseren daten
    var cookieString= username /*+ ":" + encryptedPassword*/;

    // Und schreiben das in ein Cookie, das den namen des servers trägt.
    $.cookie(server, cookieString, {
        expires: 365,
        path:'/'
    });
    // zusätzlich merken wir uns noch den server, auf dem der letzte Login dieser Sprache erfolgt ist
    $.cookie('lastLogin_'+fieldNames.language, server, {
        expires:365,
        path:'/'
    });
}

/**
 * Die Verwendung dieser Funktion ist möglicherweise problematisch,
 * da Mobilfunkproxies hier großen mist bauen und fremde Logindaten cachen!
 */
function setFBLoginCookie(fieldNames) {
    //  fieldNames sollte so aussehen:
    //  { server:'#fbServer', language:window.language };

    // Wir holen die Daten aus dem Login-Formular...
    var server = $(fieldNames.server).val();

    // und wir merken uns den server, auf dem der letzte Login dieser Sprache erfolgt ist
    $.cookie('lastLogin_FB_'+fieldNames.language, server, {
        expires:365,
        path:'/'
    });

    // Wir brauchen auch noch ein Cookie, das den namen des servers trägt.
    // Somit können wir den Server als verwendeten Facebook-Server markieren.
    $.cookie(server+'_FB', 'FB', {
        expires: 365,
        path:'/'
    });
    
}

function in_array(item, arr) {
    for(p=0; p<arr.length; p++) {
        if (item == arr[p]) return true;
    }
    return false;
}

function fbLogin() {
    var success = $('#fbForm').validationEngine({
        promptPosition: "centerRight",
        returnIsValid: true
    });
    if($('#fbForm').attr('action') == "") {
        success = false;
    }
    if(window.use_login_cookies) {
        setFBLoginCookie( {
            server:'#fbServer',
            language:window.language
        } ) ;
    }
    if (success) {
        //Experimentell: location setzen klappt. Kommt FB nicht mit POST klar?
        window.location = $('#fbForm').attr('action');
    }
}
	
function fbRegister() {
    var success = $('#fbRegisterForm').validationEngine({
            returnIsValid:true
        });
    // @TODO AGB Krams auf der Spielrunde machen lassen
    // Hässlicher Hack für die AGBs: Wir übergeben den AGB-Status mit im Formular,
    // deswegen überschreiben wir eine "####" - Zeichenfolge in der Formular-Action mit "&agb=".
    // Blöderweise wird das für facebook nochmal encoded, deswegen:
    // '#' -> '%23'
    // '&' -> '%26'
    // '=' -> '%3D'
    var oldLink = $('#fbRegisterForm').attr('action');
    var agbState = 0;
    if($("input[name='fbAgb']:checked").size() == 1) {
        agbState = 1;
    }
    var newLink = oldLink.replace('%23%23%23%23','%26agb%3D'+agbState);
    $('#fbRegisterForm').attr('action', newLink);
    if (success) window.location = $('#fbRegisterForm').attr('action');
}

function adjustSizes() {
    // AdjustValidationWarnings
    var cnt = $('.formError').length;
    if (cnt > 0)
    {
        for(var i=0; i < cnt; i++) {
            var obj = $('.formError')[i];
            var classes = $(obj).attr('class');
            var callerId = classes.match(/([\w]{1,30})formError/);
            if (callerId != null) {
                callerId = callerId[1];
                var caller = $('#'+callerId)[0];
                var promptText = $(obj).children('.formErrorContent').children('.icon').html();
                $.validationEngine.updatePromptText(caller,promptText);
            }
        }
    }
}