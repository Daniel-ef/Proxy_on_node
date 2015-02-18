var http = require('http');
var sys  = require('sys');
var fs = require('fs');
var req = require('request');
var path = require('path');


function parse_url(url){
    if(url.substr(0,10) === 'http://www'){
        url = url.substring(11,url.length);
        url=url.substring(0,url.indexOf('/'));
    }
    else if(url.substr(0,7) === 'http://'){
        url = url.substring(7,url.length);
        url=url.substring(0,url.indexOf('/'));
    }
    return url;
}

function jquery(url, filelist, response){
    if(url.indexOf('jquery-') !== -1){
        var all = url.substring(url.lastIndexOf('/')+1,url.length);
        var allname = 'jquery.min.js@'+all.substring(7,all.indexOf('.min')) + '.js';
        if(filelist.indexOf(allname) !== -1){
            _hard_simple(allname,response);
        }
        else {
            req(url).pipe(fs.createWriteStream('Library/' + allname));
            filelist.push(allname);
            Check_hash(allname);
            Dic(allname,url);
            console.log('Downloading jquery finished '+allname);
        }
        return true
    }
    else{return false}
}

function _hard_simple(allname, response){
    var filepath = path.join('Library',allname);
    response.writeHead(200,{
        'Content-Type': 'application/x-javascript',
        'Content-Encoding': 'gzip',
        'Server': 'nginx/1.6.1/bum',
        'Last-Modified': 'Mon, 01 Sep 2014 08:55:14 GMT',
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=315360000',
        'Access-Control-Allow-Origin': '*'
});
    if(fs.existsSync(filepath)){
        var file = fs.readFileSync(filepath);
    }
    else{
        return false;
    }
    response.end(file.toString('utf-8'));
    //#######################################################   size
    var size = parseInt(fs.statSync(filepath)['size']);
    var allsize =  parseInt(fs.readFileSync('Needs/size'));
    allsize = allsize + size;
    fs.writeFileSync('Needs/size', allsize);

    //#######################################################   statistic
    var mas = JSON.parse(fs.readFileSync('Needs/statistic'));
    var now = new Date().getTime();
    if(Object.keys(mas).indexOf(allname) !== -1){
        var k = mas[allname][1];
        mas[allname] = [now, k+1];
    }
    else{
        mas[allname] = [now, 0];
    }
    fs.writeFileSync('Needs/statistic', JSON.stringify(mas));

    //#######################################################   opt
    if(fs.readFileSync('Needs/opt_cash', encode='utf-8').substr(0,1)!=='0'){
        Cashe();
    }

    console.log('__________________________________Uploading js...'+allname);
    return true;
}

function _net_simple(filename, url,filelist){
    var u = url.substring(0, url.lastIndexOf('/'));
    var version = u.substring(u.lastIndexOf('/')+1,u.length);
    var allname = filename + '@' + version + '.js';
    req(url).pipe(fs.createWriteStream('Library/' + allname));
    filelist.push(allname);
    console.log('Download finished...'+allname);
    Check_hash(allname);
    urii2(url, JSON.parse(fs.readFileSync('Needs/mods')));
    Dic(allname,url);

}

function _net_ad(filename, url, filelist){
    var s = url.substring(url.lastIndexOf('/')+1,url.length);
    var nums = '0123456789';
    var version = ''
    for (var k = 0; k< s.length;k++){
        if (nums.indexOf(s.charAt(k)) !== -1){
            version = s.substring(k, s.length);
        }
    }
    var allname = filename + '@' + version + '.js';
    req(url).pipe(fs.createWriteStream('Library/' + allname));
    console.log('Download finished...'+allname);
    filelist.push(allname);
    urii2(url, JSON.parse(fs.readFileSync('Needs/mods')));
    Check_hash(allname);
    Dic(allname,url);
}

function choosing_nv(url){
    var lpath = url.substring(url.lastIndexOf('/')+1,url.length);
    if (lpath.length === lpath.substring(0,lpath.indexOf('.js')+3).length){
        var name = lpath;
        if(url.indexOf('http://') !== -1) {
            var uri = url.substring(7, url.length);
        }
        else if(url.indexOf('https://') !== -1){
            var uri = url.substring(8,url.length)
        }

        if(uri.indexOf('www') !== -1){
            var ver = uri.substring(4,uri.indexOf('/'));
        }
        else {
            var ver = uri.substring(0, uri.indexOf('/'));
        }
    }
    else{
        var path = url.substring(url.lastIndexOf('/')+1,url.length);
        var name = path.substring(0,path.lastIndexOf('.js')+3);
        var ver = path.substring(path.lastIndexOf('.js')+3,path.length);
    }
    var nums = '0123456789';
    for (var k = 0; k < ver.length;k++) {
        if (nums.indexOf(ver.charAt(k)) !== -1) {
            ver = ver.substring(k, ver.length);
        }
    }
    while (ver.indexOf('?') !== -1){
        ver = ver.substring(0,ver.indexOf('?'))+ver.substring(ver.indexOf('?')+1,ver.length);
    }
    var allname = name + '@' + ver + '.js';
    console.log('allname  '+allname);
    return allname;
}

exports._download_new = function(length, url, filelist, min_len, response) {
    var list = ['127.0.0.1','bootstrap-transition.js','Information.js','bootstrap.min.js'];
    for(var i = 0; i<list.length;i++){
        if(url.indexOf(list[i]) !== -1){
            return
        }
    }
    var not_ex = true;
    for (var o = 0; o < filelist.length; o++) {
        var name = filelist[o].substring(0, filelist[o].indexOf('@'));
        if (url.indexOf(name) !== -1) {
            not_ex = false
        }
    }
    if (length === undefined && url.indexOf('.js') !== -1 && not_ex) {
        req.head(url).on('response', function (response) {
            var length = response.headers['content-length'];
            if (length > min_len && not_ex) {
                if(jquery(url,filelist,response)){return}
                var allname = choosing_nv(url);
                console.log('Download New...   ' + allname);
                req(url).pipe(fs.createWriteStream('Library/' + allname));
                Check_hash(allname);
                Dic(allname,url);
                filelist.push(allname);
                urii2(url, JSON.parse(fs.readFileSync('Needs/mods')));
            }
        });
    }
    else if(url.indexOf('.js') !== -1 && length > min_len && not_ex) {
        if(jquery(url, filelist, response)){return}
        var allname = choosing_nv(url);
        req(url).pipe(fs.createWriteStream('Library/' + allname));
        console.log('Download New...   ' + allname);
        Check_hash(allname);
        Dic(allname,url);
        filelist.push(allname);
        urii2(url, JSON.parse(fs.readFileSync('Needs/mods')));
    }
};

exports.parse_url = function(url){
    if(url.substr(0,10) === 'http://www'){
        url = url.substring(11,url.length);
        url=url.substring(0,url.indexOf('/'));
    }
    else if(url.substr(0,7) === 'http://'){
        url = url.substring(7,url.length);
        url=url.substring(0,url.indexOf('/'));
    }
    return url;
};


exports.substitute = function(url, method, request, response, filelist, not_cash){
    if (method !== 'GET'){return false}


    if(url.indexOf('.js') !== -1 && url.indexOf('.json') === -1) {
        if(not_cash.indexOf(parse_url(url)) !== -1){
            return false
        }

        var list = ['127.0.0.1','bootstrap-transition.js','Information.js','bootstrap.min.js'];
        for(var i = 0; i<list.length;i++){
            if(url.indexOf(list[i]) !== -1){
                return false
            }
        }


        if(jquery(url,filelist,response)){return true}
        for (var i = 0; i < filelist.length; i++) {
            var allname = filelist[i];
            var filename = allname.substring(0, allname.indexOf('@'));
            var version = allname.substring(allname.indexOf('@') + 1, allname.length - 3);
            if (url.indexOf(filename) !== -1 && (url.indexOf(version) !== -1)) {
                if (_hard_simple(allname, response)) {
                    return true
                }
            }
        }

        for (var l = 0; l < filelist.length; l++) {
            var allname = filelist[l];
            var filename = allname.substring(0, allname.indexOf('@'));
            var version = allname.substring(allname.indexOf('@') + 1, allname.length - 3);
            var usl1 = filename === url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.js') + 3);
            var usl2 = url.length - url.lastIndexOf('/') - 1 !== filename.length;
            var usl3 = url.indexOf(version) === -1;

            if(usl1 && usl3){
                if(usl2){
                    _net_ad(filename, url, filelist);
                }
                else{
                    _net_simple(filename, url, filelist);
                }
            }
        }
    }
    return false
    };