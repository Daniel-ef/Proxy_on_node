var express = require("express");
var app = express();
var fs = require('fs');
var request = require('request');
var sys = require('sys');

var t = JSON.parse(fs.readFileSync('Needs/black_list'));
console.log(t);
console.log(t);