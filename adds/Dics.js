var fs = require('fs');
var req = require('request');
var mods = JSON.parse(fs.readFileSync('Needs/mods'));
console.log(mods, '------mods');

console.log(JSON.parse(fs.readFileSync('Needs/dic_of_links')), '------links');

console.log(JSON.parse(fs.readFileSync('Needs/dic_of_names')), '------names');
console.time('dic');
req.head('http://yastatic.net/jquery/1.8.3/jquery.min.js').on('response',function(response){
    console.log(response.headers['content-length']);
    console.timeEnd('dic');
});