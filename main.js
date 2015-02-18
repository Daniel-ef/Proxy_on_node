var fs = require('fs');
var db = require('nstore');
var filelist = fs.readdirSync('Library');
var po_rt = parseInt(JSON.parse(fs.readFileSync('Needs/port'))[0]);
var black_list = JSON.parse(fs.readFileSync('Needs/black_list'));
var black_list_html = fs.readFileSync('Needs/black_list.txt');
var up_date = fs.readFileSync('Needs/date_update', encode='utf-8');
var min_len = parseInt(fs.readFileSync('Needs/min_len',encode='utf-8'));
var not_cash = fs.readFileSync('Needs/not_cash', encode='utf-8').split('\n');

require('./proxy_settings_main')(filelist);
var cache_proxy = require('./cache_proxy')(filelist, po_rt,black_list,black_list_html,min_len,not_cash);



if(up_date.split('###')[1] === '1'){
    require('./updating')();
}


var times = setInterval(function () {
    require('./updating')();
}, 1000*60*60*24*parseInt(up_date.split('###')[0]));
