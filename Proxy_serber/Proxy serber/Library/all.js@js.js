!function($){
    var playInterval;
    var runPlay = function(){
        playInterval = setInterval(function(){
            document.getElementById('soc').play();
        }, 8000);
    };

    setTimeout(runPlay, 2000);

    setTimeout(function(){
        document.getElementById('soc').play();
        $("#baba").addClass('baba-wom');
    },2000);

    var audio;
    var display;

    window.onload = function() {
        audio = document.getElementById("bg");
    };

    function play() {
        audio.play();
    }

    function pause() {
        audio.pause();
    }
    document.addEventListener("DOMContentLoaded", function () {
        init();
    }, false);

    function init() {        // Master function, encapsulates all functions
        var audio = document.getElementById("bg");
        var vLength;
        var pgFlag =""; // used for progress tracking
        if (audio.canPlayType) {   // tests that we have HTML5 video support
            document.getElementById("mute").addEventListener("click", function (evt) {
                if (audio.muted) {
                    audio.muted = false;
                    document.getElementById('soc').muted = false;
                } else {
                    audio.muted = true;
                    document.getElementById('soc').muted = true;
                }
            }, false);

            audio.addEventListener("volumechange", function () {
                if (audio.muted) {
                    document.getElementById("mute").innerHTML = "<img alt='' src='img/mt.png' />"
                } else {
                    document.getElementById("mute").innerHTML = "<img alt='' src='img/aud.png' />"
                }
            }, false);
        }
    }
}(jQuery);