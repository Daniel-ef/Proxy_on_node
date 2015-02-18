var fs = require('fs');

var mods = JSON.parse(fs.readFileSync('Needs/mods'));
console.log(mods, '------mods');

console.log(JSON.parse(fs.readFileSync('Needs/dic_of_links')), '------links');

console.log(JSON.parse(fs.readFileSync('Needs/dic_of_names')), '------names');
