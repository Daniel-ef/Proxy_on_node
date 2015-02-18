var fs = require('fs');
var req = require('request');
var cr = require('crypto');


var st =setInterval(function() {
    console.log(2);
    clearInterval(st);
}, 3000);