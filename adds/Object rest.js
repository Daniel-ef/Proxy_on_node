var fs = require('fs');
var req = require('request');

var list= fs.readFileSync('Needs/CDN.txt', encode='utf-8');
list = list.split('\n');
list.pop(1);

var old_mas = JSON.parse(fs.readFileSync('Needs/url-name'));

for(var i = 9; i< list.length; i++){
    if(list[i].indexOf('css') === -1){
        var it = list[i].substr(1,list[i].length-1);
        var name = it.substring(it.lastIndexOf('/')+1,it.length-1);
        //console.log(name);
        it = it.substring(0, it.lastIndexOf('/'));
        var ver = '';
        while(it !== '') {
            ver = it.substring(it.lastIndexOf('/') + 1, it.length);
            if (ver.substr(0, 1).match(/[0-9]/) || ver.substr(ver.length - 1, 1).match(/[0-9]/)) {
                break
            }
            it = it.substring(0, it.lastIndexOf('/'));
        }
        var all_name = name + '@' + ver + '.js';
        console.log(all_name);
        old_mas[list[i].substr(2,list[i].length-3)] = all_name;
    }
}

fs.writeFileSync('Needs/url-name',JSON.stringify(old_mas));

console.log(old_mas);
/**
 * Created by ubuntu on 08.01.15.
 */
