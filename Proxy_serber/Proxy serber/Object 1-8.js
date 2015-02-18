var fs = require('fs');

var list= fs.readFileSync('Needs/CDN.txt', encode='utf-8');
list = list.split('\n');
list.pop(1);

var mas = {};

for(var i = 0;i<8;i++) {
    var item = list[i];
    var str = item.split(' ');
    str[0]=str[0].substring(2,str[0].length);

    var url = str[0];
    var name = url.substring(url.lastIndexOf('/')+1,url.length);
    var uri = str[0].substring(0, str[0].lastIndexOf('/'));
    str[str.length-1] = str[str.length-1].substring(0, str[str.length-1].length-1);

    for(var k = 1; k < str.length-1; k++){
        str[k] = str[k].substring(0,str[k].length-1);
    }
    for(var t = 1;t<str.length;t++){
        var new_url = uri.substring(0, uri.lastIndexOf('/')+1) + str[t] + '/' + name;
        var all_name = name + '@' + str[t] + '.js';
        mas[new_url] = all_name;
        console.log(new_url, all_name);
    }
    console.log(str);
}
fs.writeFileSync('Needs/url-name',JSON.stringify(mas));


/**
 * Created by ubuntu on 08.01.15.
 */
