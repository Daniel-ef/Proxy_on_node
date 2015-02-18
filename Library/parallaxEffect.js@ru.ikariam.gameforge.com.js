/**
 * JS für Parallax-Effekt im Header
 * @author carlos.mareni
 */
$(document).ready(function() {
    $('#sky div').parallax({
        mouseport: jQuery('#page'),
        xparallax: true,
        yparallax: false,
        xorigin: 'right'
    });
});