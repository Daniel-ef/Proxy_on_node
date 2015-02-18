var fs = require('fs');

module.exports = function(app, urlencodedParser) {


    //##############################################################################     GET
    app.get('/:id?', function (req, res) {
        var id = req.params.id;
        console.log('GET   ' + id);


        if (id === 'upload_all') { // Отдать весь список библиотек на загрузку
            var mas = JSON.parse(fs.readFileSync('Needs/url-name'));
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

        // Отдать весь список библиотек на загрузку по группам

        else if (id === 'upload_group') {
            var mas = JSON.parse(fs.readFileSync('Needs/url-name'));
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

        // Отдать весь список библиотек на удаление (список имеющихся бибилотек)

        else if (id === 'list_del_all') {
            var list = fs.readdirSync('Library');
            var str = [];
            for (var i = 0; i < list.length; i++) {
                str.push('<label class="checkbox" id="del_upload' + i.toString() + '"><input type="checkbox" id="del_upload_all' + i.toString() + '" value="">' + list[i] + '</label>');
            }
            res.send(str.join('\n') + '###' + list.length);
        }

        // Отдать весь список библиотек на удаление по группам (список имеющихся бибилотек)

        else if (id === 'list_del_group') {
            var list = fs.readdirSync('Library');
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
    });



    //#####################################################################       POST
    app.post("/:id?", urlencodedParser, function (req, res) {
        var id = req.params.id;
        console.log('POST   ' + id);

        // Загрузить библиотеки

        if (id === 'download_all') {
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            var mas = JSON.parse(fs.readFileSync('Needs/url-name'));
            var list = [];
            for (var key in mas) {
                list.push(mas[key]);
            }
            for (var i = 0; i < req.length; i++) {
                request('http://' + Object.keys(mas)[parseInt(req[i])]).pipe(fs.createWriteStream('Library/' + list[req[i]]));
            }
            res.send('OK');
        }

        // Загрузить бибилотеки по группам

        else if (id === 'download_group') {
            res.send('OK');
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            var mas = JSON.parse(fs.readFileSync('Needs/name-url'));
            for (var key in mas) {
                for (var i = 0; i < req.length; i++) {
                    if (key.indexOf(req[i]) !== -1) {
                        request('http://' + mas[key]).pipe(fs.createWriteStream('Library/' + key));
                    }
                }
            }
        }

        // Удалить библиотеки

        else if (id === 'del_all') {
            var mas = [];
            for (var key in req.body) {
                mas.push(key + '=' + req.body[key])
            }
            req = mas.join('&').split('\n');
            var dic_of_links = JSON.parse(fs.readFileSync('Needs/dic_of_links'));
            var dic_of_names = JSON.parse(fs.readFileSync('Needs/dic_of_names'));
            var mods = JSON.parse(fs.readFileSync('Needs/mods'));
            var hash_dic = JSON.parse(fs.readFileSync('Needs/hash_dic'));
            console.log(typeof(list_of_files));
            for (var i = 0; i < req.length; i++) {
                req[i] = req[i].substring(0, req[i].lastIndexOf('.js') + 3);
                fs.unlinkSync('Library/' + req[i]);
                list_of_files.splice(list_of_files.indexOf(req[i]), 1);
                delete dic_of_links[req[i]];
            }
            for (var key in dic_of_names) {
                if (req.indexOf(dic_of_names[key]) !== -1) {
                    delete dic_of_names[key];
                    delete mods[key];
                }
            }
            for (var key in hash_dic) {
                if (req.indexOf(hash_dic[key]) !== -1) {
                    delete hash_dic[key];
                }
            }
            fs.writeFileSync('Needs/dic_of_links', JSON.stringify(dic_of_links));
            fs.writeFileSync('Needs/dic_of_names', JSON.stringify(dic_of_names));
            fs.writeFileSync('Needs/mods', JSON.stringify(mods));
            fs.writeFileSync('Needs/hash_dic', JSON.stringify(hash_dic));
            res.send('OK');
        }

        // Удалить бибилотеки по группам

        else if (id === 'del_group') {
            var req = Object.keys(req.body)[0];
            req = req.split('\n');
            var files = fs.readdirSync('Library');
            for (var i = 0; i < files.length; i++) {
                for (var k = 0; k < req.length; k++) {
                    if (files[i].indexOf(req[k]) !== -1) {
                        fs.unlink('Library/' + files[i]);
                    }
                }

            }
            res.send('OK');
        }
    });


};