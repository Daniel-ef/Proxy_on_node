//exports.Express = function(){
    var jxm = require('jxm');
    var express = require("express");
    var app = express();
    var bodyParser = require('body-parser');
    var urlencodedParser = bodyParser.urlencoded({extended: false});
    var fs = require('fs');
    var request = require('request');
    var sys = require('sys');

    /* serves main page */
    app.get("/", function (req, res) {
        res.sendFile(__dirname + '/html/base.html');
    });

    app.get('/:id?', function (req, res) {
        var id = req.params.id;
        console.log('GET   ' + id);
        if (id === 'static') {
            var libs = fs.readdirSync('Proxy serber/Library/');
            var amount_libs = libs.length.toString();
            var size_libs = 0;
            for (var i = 0; i < libs.length; i++) {
                var size = fs.statSync('Proxy serber/Library/' + libs[i])['size'];
                size_libs = size_libs + size;
            }
            size_libs = Math.round(size_libs / 1000).toString();
            var size_economic = Math.round(fs.readFileSync('Proxy serber/size') / 1000).toString();
            var response = amount_libs + '$' + size_libs + '$' + size_economic;
            res.send(response);
        }
        else if (id === 'list') {
            var libs = fs.readdirSync('Proxy serber/Library/').join('\n');
            var mods = JSON.parse(fs.readFileSync('Proxy serber/Needs/mods'));
            var names = JSON.parse(fs.readFileSync('Proxy serber/Needs/dic_of_names'));
            var mods1 = [];
            var names1 = [];
            var len = 0;
            for (var i = 0; i < Object.keys(mods).length; i++) {
                mods1.push(mods[Object.keys(mods)[i]]);
                names1.push(names[Object.keys(mods)[i]]);
                if (names[Object.keys(mods)[i]].length > len) {
                    len = names[Object.keys(mods)[i]].length;
                }

            }
            console.log(len + 1);
            mods1 = mods1.join('\n');
            names1 = names1.join('\n');
            var response = libs + '$' + mods1 + '$' + names1 + '$' + len.toString();
            res.send(response);
        }
        else if (id === 'port') {
            res.send(fs.readFileSync('Proxy serber/Needs/port'));
        }
        else if (id === 'black_list') {
            res.send(JSON.parse(fs.readFileSync('Proxy serber/Needs/black_list')).join('\n'));
        }
        else if (id === 'upload_all') {
            var mas = JSON.parse(fs.readFileSync('Proxy serber/Needs/url-name'));
            var list = [];
            for (var key in mas) {
                list.push(mas[key]);
            }
            var str = [];
            for (var i = 0; i < list.length; i++) {
                str.push('<label class="checkbox"><input type="checkbox" id="upload_all' + i.toString() + '" value="">' + list[i] + '</label>')
            }
            res.send(str.join('\n') + '###' + list.length.toString());
        }
        else if (id === 'upload_group') {
            var mas = JSON.parse(fs.readFileSync('Proxy serber/Needs/url-name'));
            var list = [];
            for (var key in mas) {
                list.push(mas[key]);
            }
            mas = {};
            for (var i = 0; i < list.length; i++) {
                var name = list[i].substring(0, list[i].indexOf('@'));
                if (Object.keys(mas).indexOf(name) === -1) {
                    mas[name] = 1;
                }
                else {
                    mas[name] = parseInt(mas[name]) + 1;
                }
            }
            list = [];
            for (var key in mas) {
                if (parseInt(mas[key]) > 1) {
                    list.push(key);
                }
            }
            var str = [];
            for (var i = 0; i < list.length; i++) {
                str.push('<label class="checkbox" id="label_upload_group' + i.toString() + '"><input type="checkbox" id="upload_group' + i.toString() + '" value="">' + list[i] + '</label>')
            }
            res.send(str.join('\n') + '###' + list.length);
        }
        else if (id === 'list_del_all') {
            var list = fs.readdirSync('Proxy serber/Library1');
            var str = [];
            for (var i = 0; i < list.length; i++) {
                str.push('<label class="checkbox" id="del_upload' + i.toString() + '"><input type="checkbox" id="del_upload_all' + i.toString() + '" value="">' + list[i] + '</label>');
            }
            res.send(str.join('\n') + '###' + list.length);
        }
        else if (id === 'list_del_group') {
            var list = fs.readdirSync('Proxy serber/Library1');
            var obj = {};
            for (var i = 0; i < list.length; i++) {
                var lib = list[i];
                var name = lib.substring(0, lib.indexOf('@'));
                if (Object.keys(obj).indexOf(name) === -1) {
                    obj[name] = [lib];
                }
                else {
                    obj[name].push(lib);
                }
            }
            var str = [];
            var t = 0;
            for (var k = 0; k < Object.keys(obj).length; k++) {
                var keys = Object.keys(obj);
                if (obj[keys[k]].length > 1) {
                    str.push('<label class="checkbox" id="del_upload_gr' + t.toString() + '"><input type="checkbox" id="del_upload_group' + t.toString() + '" value=""/>' + keys[k] + '</label>');
                    t++;
                }
            }
            res.send(str.join('\n') + '###' + t);
        }
            else if(id==='infin_check'){
            var opt = fs.readFileSync('Proxy serber/Needs/opt_cash', encode='utf-8');
            res.send(opt);

        }
        else if (id === 'pum') {
            res.send('OK');
        }

        else {
            res.sendFile(__dirname + '/html/' + id);
        }
    });

    app.get(/^(.+)$/, function (req, res) {
        //console.log('static file request : ' + req.params);
        res.sendFile(__dirname + '/html/' + req.params[0]);

    });

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    function sorting(tm) {
        var list = Object.keys(tm);
        list.sort(compareNumeric);
        var mt = {};
        for (var i = 0; i < list.length; i++) {
            mt[list[i]] = tm[list[i]];
        }
        return mt;
    }


    app.post("/:id?", urlencodedParser, function (req, res) {

        var id = req.params.id;
        console.log('POST   ' + id);

        if (id === 'log&pass') {
            var body = Object.keys(req.body)[0];
            var lp = JSON.parse(fs.readFileSync('Proxy serber/Needs/log&pass'));
            var log = body.substring(0, body.indexOf('$'));
            var pass = body.substring(body.indexOf('$') + 1, body.length);
            if (log === lp[0] && pass === lp[1]) {
                res.send("OK");
            }
            else {
                res.send("Ignore");
            }
        }
        else if (id === 'port') {
            var pt = Object.keys(req.body);
            fs.writeFileSync('Proxy serber/Needs/port', JSON.stringify(pt));
            res.send('OK');
        }
        else if (id === 'change_pass') {
            var body = Object.keys(req.body)[0];
            var old_p = body.substring(0, body.indexOf('$'));
            var new_p = body.substring(body.indexOf('$') + 1, body.length);
            var lp = JSON.parse(fs.readFileSync('Proxy serber/Needs/log&pass'));
            if (old_p === lp[1]) {
                lp[1] = new_p;
                res.send('OK');
                fs.writeFileSync('Proxy serber/Needs/log&pass', JSON.stringify(lp));
            }
            else {
                res.status(201).send('BAD');
            }
        }
        else if (id === 'radio') {
            res.send('OK');

            var req = Object.keys(req.body)[0];
            var opt = req.substr(0, 1);
            var vol = parseInt(req.substr(1, req.length)) * 1024;
            fs.writeFileSync('Proxy serber/Needs/opt_cash', opt + '###' + vol, encode = 'utf-8');
            var mas = {};
            var dir = fs.readdirSync('Proxy serber/Library1');
            var fold_size = 0;
            for (var i = 0; i < dir.length; i++) {
                var l = fs.statSync('Proxy serber/Library1/' + dir[i]).size;
                mas[l] = dir[i];
                fold_size += l;
            }
            var sum = 0;
            //#########################################################################################   1
            if (opt === '1') {
                var tm = {};
                var stat = JSON.parse(fs.readFileSync('Proxy serber/Needs/statistic'));
                var finish = true;
                for (var key in mas) {
                    if (Object.keys(stat).indexOf(mas[key]) === -1) {
                        if (vol < fold_size) {
                            fs.unlinkSync('Proxy serber/Library1/' + mas[key]);
                            fold_size = fold_size - parseInt(key);
                        }
                        else {
                            finish = false;
                            break
                        }
                    }
                    else {
                        tm[parseInt(stat[mas[key]][0])] = mas[key];
                    }
                }
                if (finish) {
                    tm = sorting(tm);
                    for (var k in tm) {
                        if (vol < fold_size) {
                            fold_size = fold_size - fs.statSync('Proxy serber/Library1/' + tm[k]).size;
                            fs.unlinkSync('Proxy serber/Library1/' + tm[k]);
                            delete stat[tm[k]];
                        }
                        else {
                            break
                        }
                    }
                    fs.writeFileSync('Proxy serber/Needs/statistic', JSON.stringify(stat));
                }

            }
            //#########################################################################################   2
            if (opt === '2') {
                var tm = {};
                var stat = JSON.parse(fs.readFileSync('Proxy serber/Needs/statistic'));
                var finish = true;
                for (var key in mas) {
                    if (Object.keys(stat).indexOf(mas[key]) === -1) {
                        if (vol < fold_size) {
                            fs.unlinkSync('Proxy serber/Library1/' + mas[key]);
                            fold_size = fold_size - parseInt(key);
                        }
                        else {
                            finish = false;
                            break
                        }
                    }
                    else {
                        tm[parseInt(stat[mas[key]][1])] = mas[key];
                    }
                }
                if (finish) {
                    tm = sorting(tm);
                    for (var k in tm) {
                        if (vol < fold_size) {
                            fold_size = fold_size - fs.statSync('Proxy serber/Library1/' + tm[k]).size;
                            fs.unlinkSync('Proxy serber/Library1/' + tm[k]);
                            delete stat[tm[k]];
                        }
                        if (vol > fold_size) {
                            break
                        }
                    }
                    fs.writeFileSync('Proxy serber/Needs/statistic', JSON.stringify(stat));
                }
            }
            //#########################################################################################   3
            else if (opt === '3') {
                var stat = JSON.parse(fs.readFileSync('Proxy serber/Needs/statistic'));
                for (var k = Object.keys(mas).length - 1; k > -1; k--) {
                    if (sum < vol) {
                        sum += parseInt(Object.keys(mas)[k]);
                    }
                    if (sum > vol) {
                        fs.unlinkSync('Proxy serber/Library1/' + mas[Object.keys(mas)[k]]);
                        if (Object.keys(stat).indexOf(mas[Object.keys(mas)[k]]) !== -1) {
                            delete stat[mas[Object.keys(mas)[k]]];
                        }
                    }
                }
                fs.writeFileSync('Proxy serber/Needs/statistic', JSON.stringify(stat));
            }
            //#########################################################################################   4
            else if (opt === '4') {
                var sum = 0;
                var stat = JSON.parse(fs.readFileSync('Proxy serber/Needs/statistic'));
                for (key in mas) {
                    if (sum < vol) {
                        sum += parseInt(key);
                    }
                    if (sum > vol) {
                        fs.unlinkSync('Proxy serber/Library1/' + mas[key]);
                        if (Object.keys(stat).indexOf(mas[key]) !== -1) {
                            delete stat[mas[key]];
                        }
                    }
                }
            }
        }
        else if (id === 'download_all') {
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            var mas = JSON.parse(fs.readFileSync('Proxy serber/Needs/url-name'));
            var list = [];
            for (var key in mas) {
                list.push(mas[key]);
            }
            for (var i = 0; i < req.length; i++) {
                request('http://' + Object.keys(mas)[parseInt(req[i])]).pipe(fs.createWriteStream('Proxy serber/Library1/' + list[req[i]]));
            }
            res.send('OK');
        }
        else if (id === 'download_group') {
            res.send('OK');
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            var mas = JSON.parse(fs.readFileSync('Proxy serber/Needs/name-url'));
            for (var key in mas) {
                for (var i = 0; i < req.length; i++) {
                    if (key.indexOf(req[i]) !== -1) {
                        request('http://' + mas[key]).pipe(fs.createWriteStream('Proxy serber/Library1/' + key));
                    }
                }
            }
        }
        else if (id === 'del_all') {
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            for (var i = 0; i < req.length; i++) {
                fs.unlinkSync('Proxy serber/Library1/' + req[i]);
            }
            res.send('OK');
        }
        else if (id === 'del_group') {
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            var files = fs.readdirSync('Proxy serber/Library1');
            for (var i = 0; i < files.length; i++) {
                for (var k = 0; k < req.length; k++) {
                    if (files[i].indexOf(req[k]) !== -1) {
                        fs.unlink('Proxy serber/Library1/' + files[i]);
                    }
                }

            }
            res.send('OK');
        }
        else if (id === 'black_list') {
            res.send('OK');
            var list = Object.keys(req.body)[0];
            if (list !== undefined) {
                list = list.split('\n');

                for (var i = 0; i < list.length; i++) {
                    var l = list[i];
                    if (l === '') {
                        list.splice(i, 1);
                    }
                    else {
                        if (l.substr(0, 7) === 'http://') {
                            l = l.substring(7, l.length);
                        }
                        if (l.substr(0, 3) === 'www') {
                            l = l.substring(4, l.length);
                        }
                        list[i] = l;
                    }
                }
                fs.writeFileSync('Proxy serber/Needs/black_list', JSON.stringify(list));
            }
            else {
                fs.writeFileSync('Proxy serber/Needs/black_list', JSON.stringify({}));

            }
        }
        else if(id === 'update'){
            res.send('OK');
            var r = Object.keys(req.body)[0];
            fs.writeFileSync('Proxy serber/Needs/date_update', r, encode='utf-8');
        }
        else if (id === 'add_link') {
            res.send('OK');
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            for (var i = req.length - 1; i > -1; i--) {
                if (req[i] === '') {
                    req.splice(i, 1);
                }
            }
            for (var k = 0; k < req.length; k++) {
                var url = req[k];
                var uri = req[k];

                if (url.substr(0, 7) === 'http://') {
                    url = url.substring(7, url.length);
                }
                if (url.substr(0, 3) === 'www') {
                    url = url.substring(3, url.length);
                }
                uri = url;
                var name = url.substring(url.lastIndexOf('/') + 1, url.length);
                url = url.substring(0, url.lastIndexOf('/'));
                while (k !== '') {
                    var ver = url.substring(url.lastIndexOf('/') + 1, url.length);
                    if (ver.substr(0, 1).match(/[0-9]/) || ver.substr(ver.length - 1, 1).match(/[0-9]/)) {
                        break
                    }
                    url = url.substring(0, url.lastIndexOf('/'));
                }
                var allname = name + '@' + ver + '.js';
                request('http://' + uri)
                    .on('error', function (error) {
                        console.log(error);
                    })
                    .pipe(fs.createWriteStream('Proxy serber/Library1/' + allname));

            }
        }
    });


    var po_rt = parseInt(JSON.parse(fs.readFileSync('Proxy serber/Needs/port'))[1]);
    var port = process.env.PORT || po_rt;

    app.listen(port, function () {
        sys.log("express is up and listening on " + port);
    });
