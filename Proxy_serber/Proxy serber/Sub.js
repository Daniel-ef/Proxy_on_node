var http = require('http');
var sys  = require('sys');
var fs = require('fs');
var req = require('request');
var path = require('path');
var cr = require('crypto');



function Check_hash(allname){
    var size1 = 0;
    var times = setInterval(function () {
         if(fs.existsSync('Library1/'+allname) && size1 > 0 && fs.statSync('Library1/'+allname).size === size1 ) {
            var hash_dic = JSON.parse(fs.readFileSync('Needs/hash_dic'));
            var hash_list = [];//массив хеш-сумм
            var name_list = [];//массив имён
            for (var key in hash_dic) {
                hash_list.push(key);
                name_list.push(hash_dic[key]);
            }
            var lib = fs.readFileSync('Library1/' + allname);
            var shasum = cr.createHash('md5');
            var hash = shasum.update(lib).digest('hex');
            console.log(hash, allname);
            if (hash_list.indexOf(hash) !== -1) {
                fs.unlinkSync('Library1/' + allname);
                fs.linkSync('Library1/' + hash_dic[hash], 'Library1/' + allname);
            }
            else {
                hash_dic[hash] = allname;
                fs.writeFileSync('Needs/hash_dic', JSON.stringify(hash_dic));
            }
            clearInterval(times);
        }
        size1 = fs.statSync('Library1/'+allname).size;
}, 50);

}

function Dic(allname,url){
    //##############################################Словарь {имя: [ссылки]}
    var dic_of_links =JSON.parse(fs.readFileSync('Needs/dic_of_links'));
    if (Object.keys(dic_of_links).indexOf(allname) !== -1 && dic_of_links[allname].indexOf(url) === -1){
        var mas = dic_of_links[allname];
        mas.push(url);
        dic_of_links[allname] = mas;
        fs.writeFileSync('Needs/dic_of_links',JSON.stringify(dic_of_links));
    }else if(Object.keys(dic_of_links).indexOf(allname) === -1){
        dic_of_links[allname] = [url];
        fs.writeFileSync('Needs/dic_of_links',JSON.stringify(dic_of_links));
    }

    //##############################################Словарь {ссылка: имя}
    var dic_of_names = fs.readFileSync('Needs/dic_of_names');
    dic_of_names = JSON.parse(dic_of_names);
    if (Object.keys(dic_of_names).indexOf(url) === -1){
        dic_of_names[url] = allname;
        fs.writeFileSync('Needs/dic_of_names',JSON.stringify(dic_of_names));
    }
}

function Cash(){
    var op = fs.readFileSync('Needs/opt_cash', encode = 'utf-8');
    var opt = op.split('###')[0];
    var vol = op.split('###')[1];
    mas = {};
    var dir = fs.readdirSync('Library1');
    var fold_size = 0;
    for(var i = 0; i < dir.length; i++) {
        var l = fs.statSync('Library1/' + dir[i]).size;
        mas[l] = dir[i];
        fold_size += l;
    }
    var sum = 0;
    if(opt === '3'){
        var stat = JSON.parse(fs.readFileSync('Needs/statistic'));
        console.log(mas);
        for (var k = Object.keys(mas).length - 1; k > -1; k--) {
            if (sum < vol) {
                sum += parseInt(Object.keys(mas)[k]);
            }
            else {
                fs.unlinkSync('Library1/' + mas[Object.keys(mas)[k]]);
                if (Object.keys(stat).indexOf(mas[Object.keys(mas)[k]]) !== -1) {
                    delete stat[mas[Object.keys(mas)[k]]];
                }
            }
        }
        fs.writeFileSync('Needs/statistic', JSON.stringify(stat));
    }
    else if(opt === '4'){
        var sum = 0;
        var stat = JSON.parse(fs.readFileSync('Needs/statistic'));
        for (key in mas) {
            if (sum < vol) {
                sum += parseInt(key);
                console.log(sum);
            }
            if (sum > vol){
                fs.unlinkSync('Library1/' + mas[key]);
                if (Object.keys(stat).indexOf(mas[key]) !== -1) {
                    delete stat[mas[key]];
                }
            }
        }
    }
}


function urii1(url,mods,dic_of_names){
    console.log('bab',url);
    req.head(url).on('response', function (response) {
        var last_mod = response.headers['last-modified'];
        if (last_mod !== mods[url]) { // Если библиотека обновилась на сайте
            var allname = dic_of_names[url];
            req(url).pipe(fs.createWriteStream('Library/' + allname)).on('end',function(allname){
                Check_hash(allname);
                console.log('Lib updated...' + allname);
            });
            delete mods[url];
            mods[url] = last_mod;
            fs.writeFileSync('Needs/mods', JSON.stringify(mods));
        }
    });
}

function urii2(url,mods){
    console.log('dva',url);
    req.head(url).on('response', function (response) {
        var last_mod = response.headers['last-modified'];
        mods[url] = last_mod;
        fs.writeFileSync('Needs/mods',JSON.stringify(mods));
    }).on('end',function(){console.log('date of renovation download...',url)});
}

function Updating(){
    var dic_of_names = JSON.parse(fs.readFileSync('Needs/dic_of_names')); // {имя:[ссылки]}
    mods = JSON.parse(fs.readFileSync('Needs/mods')); // {ссылка:изменение}
    list_of_url = Object.keys(dic_of_names);
    for (i= 0;i< list_of_url.length; i++) {     //проходимся по ссылкам
        url = list_of_url[i];
        if (Object.keys(mods).indexOf(url) !== -1) { // Есть в списке mods
            urii1(url,mods,dic_of_names);
        }
        else {
            urii2(url,mods);
        }
    }
    console.log('Updated');
}


exports.time_up = function(tf){
    var now = new Date();
    if (now.getDate() >= tf[0]) {
        tf[0] = now.getDate() + 1;
        fs.writeFileSync('Needs/time', tf);
        Updating();
    }else if (now.getMonth() > tf[1]){
        tf[1] = now.getMonth();
        tf[0] = now.getDate()+1;
        fs.writeFileSync('Needs/time', tf);
        Updating();
    }else if (now.getYear() > tf[2]){
        tf[2] = now.getYear;
        tf[1] = now.getMonth();
        tf[0] = now.getDate()+1;
        fs.writeFileSync('Needs/time',tf)
        Updating();
    }
    else {
        console.log('No needs to updating');
    }
};

function jquery(url){
    if(url.indexOf('jquery-') !== -1){
        var all = url.substring(url.lastIndexOf('/')+1,url.length);
        var allname = 'jquery.min.js@'+all.substr(7,5) + '.js';
        req(url).pipe(fs.createWriteStream('Library1/'+allname));
        console.log(url);
        Check_hash(allname);
        console.log('Downloading jquery finished');
        return true
    }
    else{return false}
}

function _hard_simple(allname, response){
    var filepath  = path.join('Library1',allname);
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
    var allsize =  parseInt(fs.readFileSync('size'));
    allsize = allsize + size;
    fs.writeFileSync('size', allsize);

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
        Cash();
    }

    console.log('Uploading js...'+allname);
    return true;


}

function _net_simple(filename, url,filelist){
    var u = url.substring(0, url.lastIndexOf('/'));
    var version = u.substring(u.lastIndexOf('/')+1,u.length);
    var allname = filename + '@' + version + '.js';
    req(url).pipe(fs.createWriteStream('Library1/' + allname));
    console.log(url);
    Check_hash(allname);
    console.log('Download finished...'+allname);
    Dic(allname,url);
    filelist.push(allname);
}

function _net_ad(filename, url, filelist){
    var s = url.substring(url.lastIndexOf('/')+1,url.length);
    var nums = '0123456789';
    for (var k = 0; k< s.length;k++){
        if (nums.indexOf(s.charAt(k)) !== -1){
            var version = s.substring(k, s.length);
        }
    }
    var allname = filename + '@' + version + '.js';
    req(url).pipe(fs.createWriteStream('Library1/' + allname));
    console.log(url);
    Check_hash(allname);
    console.log('Download finished...'+allname);
    Dic(allname,url);
    filelist.push(allname);
}

function choosing_nv(url){
    var lpath = url.substring(url.lastIndexOf('/')+1,url.length);
    if (lpath.length === lpath.substring(0,lpath.indexOf('.js')+3).length){
        var name = lpath;
        lpath = url.substring(0,url.lastIndexOf('/'));
        var ver = lpath.substring(lpath.lastIndexOf('/')+1,lpath.length);
        var allname = name + '@' + ver + '.js';
    }
    else{
        var path = url.substring(url.lastIndexOf('/')+1,url.length);
        var name = path.substring(0,path.lastIndexOf('.js')+3);
        var ver = path.substring(path.lastIndexOf('.js')+3,path.length);
        var nums = '0123456789';
        for (var k = 0; k < ver.length;k++) {
            if (nums.indexOf(ver.charAt(k)) !== -1) {
                ver = ver.substring(k, ver.length);
            }
        }
        var allname = name + '@' + ver + '.js';
    }
    return allname;
}

exports._download_new = function(length, url, filelist) {
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
            if (length > 10000 && not_ex) {
                //if(jquery(url)){return}
                var allname = choosing_nv(url);
                req(url).pipe(fs.createWriteStream('Library1/' + allname));
                console.log('Download New...   ' + allname);
                Check_hash(allname);
                filelist.push(allname);
            }
        });
    }
    else if(url.indexOf('.js') !== -1 && length > 10000 && not_ex) {
        //if(jquery(url)){return}
        var allname = choosing_nv(url);
        req(url).pipe(fs.createWriteStream('Library1/' + allname));
        console.log('Download New...   ' + allname);
        Check_hash(allname);
        filelist.push(allname);
    }
};

exports.pasrse_url = function(url){
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


exports.substitute = function(url, method, request, response, filelist){
    if (method !== 'GET'){return false}
    if(url.substr(0,21) === 'http://127.0.0.1:8080'){return false}

    for (var i=0;i<filelist.length;i++){
        var allname = filelist[i];
        var filename = allname.substring(0,allname.indexOf('@'));
        var version = allname.substring(allname.indexOf('@')+1,allname.length-3);
        var a = filename === url.substring(url.lastIndexOf('/')+1,url.lastIndexOf('.js')+3);
        if(a && (url.indexOf(version) !== -1)){
            if (_hard_simple(allname, response)){
                return true
                }
            }
        }
    //if(jquery(url)){return false}
    for (var l=0; l<filelist.length;l++){
        var allname = filelist[l];
        var filename = allname.substring(0,allname.indexOf('@'));
        var version = allname.substring(allname.indexOf('@')+1,allname.length-3);
        var usl1 = filename === url.substring(url.lastIndexOf('/')+1,url.lastIndexOf('.js')+3);
        var usl2 = url.length-url.lastIndexOf('/')-1 !== filename.length;
        var usl3 = url.indexOf(version) === -1;

        if (usl1 && usl2 && usl3){
            _net_ad(filename, url, filelist);
            }
        else if (usl1 && usl3){
            _net_simple(filename, url,filelist);
        }
    }
    return false
    };