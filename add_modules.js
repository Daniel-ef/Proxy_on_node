var fs = require('fs');
var cr = require('crypto');

exports.check_hash = function(allname){
    var size1 = 0;
    var times = setInterval(function () {
        if(fs.existsSync('Library/'+allname) && size1 > 0 && fs.statSync('Library/'+allname).size === size1 ) {
            var hash_dic = JSON.parse(fs.readFileSync('Needs/hash_dic'));
            var hash_list = [];//массив хеш-сумм
            var name_list = [];//массив имён
            for (var key in hash_dic) {
                hash_list.push(key);
                name_list.push(hash_dic[key]);
            }
            var lib = fs.readFileSync('Library/' + allname);
            var shasum = cr.createHash('md5');
            var hash = shasum.update(lib).digest('hex');
            if (hash_list.indexOf(hash) !== -1 && fs.existsSync('Libarary1/' + allname)) {
                fs.unlinkSync('Library/' + allname);
                fs.linkSync('Library/' + hash_dic[hash], 'Library/' + allname);
            }
            else {
                hash_dic[hash] = allname;
                fs.writeFileSync('Needs/hash_dic', JSON.stringify(hash_dic));
            }
            clearInterval(times);
        }
        if(fs.existsSync('Library/'+allname)){size1 = fs.statSync('Library/'+allname).size}
    }, 50);

};

exports.dic = function(allname,url){
    //##############################################                             Delete '?'
    if(url.indexOf('?') !== -1){
        url = url.substring(0,url.indexOf('?'))
    }
    //##############################################                             Словарь {имя: [ссылки]}
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

    //##############################################                             Словарь {ссылка: имя}
    var dic_of_names = fs.readFileSync('Needs/dic_of_names');
    dic_of_names = JSON.parse(dic_of_names);
    if (Object.keys(dic_of_names).indexOf(url) === -1){
        dic_of_names[url] = allname;
        fs.writeFileSync('Needs/dic_of_names',JSON.stringify(dic_of_names));
    }
    //##############################################                              Updating()
    var mods = JSON.parse(fs.readFileSync('Needs/mods'));
    req.head(url).on('response',function(response){
        var last_mod = response.headers['last-modified'];
        mods[url] = last_mod;
        fs.writeFileSync('Needs/mods',JSON.stringify(mods));
    })
};

exports.cashe = function(){
    var op = fs.readFileSync('Needs/opt_cash', encode = 'utf-8');
    var opt = op.split('###')[0];
    var vol = op.split('###')[1];
    mas = {};
    var dir = fs.readdirSync('Library');
    var fold_size = 0;
    for(var i = 0; i < dir.length; i++) {
        var l = fs.statSync('Library/' + dir[i]).size;
        mas[l] = dir[i];
        fold_size += l;
    }
    var sum = 0;
    if(opt === '3'){
        var stat = JSON.parse(fs.readFileSync('Needs/statistic'));
        for (var k = Object.keys(mas).length - 1; k > -1; k--) {
            if (sum < vol) {
                sum += parseInt(Object.keys(mas)[k]);
            }
            else {
                fs.unlinkSync('Library/' + mas[Object.keys(mas)[k]]);
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
            }
            if (sum > vol){
                fs.unlinkSync('Library/' + mas[key]);
                if (Object.keys(stat).indexOf(mas[key]) !== -1) {
                    delete stat[mas[key]];
                }
            }
        }
    }
}