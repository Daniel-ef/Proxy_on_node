var fs = require('fs');
var req = require('request');
var ping=require('ping');

var mods = JSON.parse(fs.readFileSync('Needs/mods'));
var links = Object.keys(mods);
