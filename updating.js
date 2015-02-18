var fs = require('fs');
var req = require('request');
var ad = require('./add_modules');

function urii1(url,mods,dic_of_names,dic_of_links){
    req.head(url).on('response', function (response) {
        var last_mod = response.headers['last-modified'];
        if (last_mod !== mods[url]) { // Если библиотека обновилась на сайте
            if(dic_of_links[dic_of_names[url]].length > 1){
                var allname = dic_of_names[url];
                dic_of_links[allname].splice( dic_of_links[allname].indexOf(url));
                allname = allname.substring(0,allname.indexOf('@'))+'@' + parse_url(url).substring(0,url.indexOf('/'));
                dic_of_names[url] = allname;
                dic_of_links[allname] = url;
                req(url).pipe(fs.createWriteStream('Library/'+allname));
                console.log('Lib separated and updated   '+allname);
                ad.check_hash(allname);
            }
            else {
                var allname = dic_of_names[url];
                req(url).pipe(fs.createWriteStream('Library/' + allname));
                ad.check_hash(allname);
                console.log('Lib updated...' + allname);
                delete mods[url];
                mods[url] = last_mod;
                fs.writeFileSync('Needs/mods', JSON.stringify(mods));
            }
        }

    });
}

function urii2(url,mods){
    req.head(url).on('response', function (response) {
        var last_mod = response.headers['last-modified'];
        mods[url] = last_mod;
        fs.writeFileSync('Needs/mods',JSON.stringify(mods));
    });
    console.log('date of renovation download...',url);
}

module.exports = function(){
    var dic_of_names = JSON.parse(fs.readFileSync('Needs/dic_of_names')); // {ссылка:имя}
    var dic_of_links = JSON.parse(fs.readFileSync('Needs/dic_of_links')); // {имя:[ссылки]}
    var mods = JSON.parse(fs.readFileSync('Needs/mods')); // {ссылка:изменение}
    var list_of_url = Object.keys(dic_of_names);
    for (var i= 0;i< list_of_url.length; i++) {     //проходимся по ссылкам
        var url = list_of_url[i];
        if (Object.keys(mods).indexOf(url) !== -1) { // Есть в списке mods
            urii1(url,mods,dic_of_names,dic_of_links);
        }
        else {
            urii2(url,mods);
        }
    }
};