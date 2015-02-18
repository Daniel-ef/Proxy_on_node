var fs = require('fs');
var req = require('request');

var list= fs.readFileSync('Needs/CDN.txt', encode='utf-8');
list = list.split('\n');
list.pop(1);

var old_mas = JSON.parse(fs.readFileSync('Needs/url-name'));


var str = list[7].split(' ');

var url = str[0];
var name = url.substring(url.lastIndexOf('/')+1, url.length);
str[str.length-1] = str[str.length-1].substring(0, str[str.length-1].length-1);
str[0] = url = url.substring(2,url.lenght);
console.log(str);

for(var t = 1; t < str.length-1; t++){
    str[t] = str[t].substring(0, str[t].length-1);
}

var uri = url.substring(0, url.lastIndexOf('/'));
uri = uri.substring(0, uri.lastIndexOf('/'));
for(var i = 1; i< str.length;i++){
    var new_url = uri.substring(0, uri.lastIndexOf('/')+1) + str[i] + '/dojo/dojo.js';
    var new_name = name + '@' + str[i] + '.js';
    old_mas[new_url] = new_name;
}

fs.writeFileSync('Needs/url-name', JSON.stringify(old_mas));

