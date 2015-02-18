var http = require('http');
var fs=require('fs');
var req = require('request');
var cr = require('crypto');
var dic = [];

var filelist = fs.readdirSync('Library');
for (var i = 0;i<filelist.length;i++){
    var file = fs.readFileSync('Library/'+filelist[i]);
        var shasum = cr.createHash('md5');
        var hash = shasum.update(file).digest('hex');
        var s = hash+':'+filelist[i];
    dic.push(s);
}
console.log(dic);
fs.writeFileSync('Library/Needs/hash_dic',JSON.stringify(dic));


