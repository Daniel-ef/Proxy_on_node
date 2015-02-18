var fs = require('fs');


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




module.exports = function(app, urlencodedParser) {

    //##########################################################################      GET
    app.get('/:id?', function (req, res) {
        var id = req.params.id;
        console.log('GET   ' + id);

        // Отсылаем какой вариант очистки и минимальный размер библиотеки

        if (id === 'infin_check') {
            var opt = fs.readFileSync('Needs/opt_cash', encode = 'utf-8');
            var min_len = fs.readFileSync('Needs/min_len', encode = 'utf-8');
            res.send(opt + '###' + min_len);

        }

        // отсылваем на каких файлах не кэшируем

        else if (id === 'not_cash_list') {
            res.send(fs.readFileSync('Needs/not_cash', encode = 'utf-8'));
        }

        // Обновляем бибилотеки

        else if(id==='update_libs'){
            res.send('OK');
            require('./updating');
        }
    });
    //###########################################################################      POST
    app.post("/:id?", urlencodedParser, function (req, res) {
        var id = req.params.id;
        console.log('POST   ' + id);

        // Как часто обновлять

        if (id === 'update') {
            res.send('OK');
            var r = Object.keys(req.body)[0];
            fs.writeFileSync('Needs/date_update', r, encode = 'utf-8');
        }

        // Минимальный размер библиотеки

        else if (id === 'min_len') {
            res.send('OK');
            var req = Object.keys(req.body)[0];
            fs.writeFileSync('Needs/min_len', req, encode = 'utf-8')
        }

        // добавляем ссылки пользователя на загрузку

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
                // Парсим
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
                    .pipe(fs.createWriteStream('Library/' + allname));

            }
        }

        // Какие сайты не кэшировать

        else if (id === 'not_cash') {
            res.send('OK');
            var req = Object.keys(req.body)[0];
            fs.writeFileSync('Needs/not_cash', req, encode = 'utf-8');
        }

        // Удаляем бибилотеки по критерию, выбранному пользователем

        else if (id === 'radio') {
            res.send('OK');

            var req = Object.keys(req.body)[0];
            var opt = req.substr(0, 1);
            var vol = parseInt(req.substr(1, req.length)) * 1024;
            fs.writeFileSync('Needs/opt_cash', opt + '###' + vol, encode = 'utf-8');
            var mas = {};
            var dir = fs.readdirSync('Library');
            var fold_size = 0;
            for (var i = 0; i < dir.length; i++) {
                var l = fs.statSync('Library/' + dir[i]).size;
                mas[l] = dir[i];
                fold_size += l;
            }
            var sum = 0;
            //#########################################################################################   1 (позже всех)
            if (opt === '1') {
                var tm = {};
                var stat = JSON.parse(fs.readFileSync('Needs/statistic'));
                var finish = true;
                for (var key in mas) {
                    if (Object.keys(stat).indexOf(mas[key]) === -1) {
                        if (vol < fold_size) {
                            fs.unlinkSync('Library/' + mas[key]);
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
                            fold_size = fold_size - fs.statSync('Library/' + tm[k]).size;
                            fs.unlinkSync('Library/' + tm[k]);
                            delete stat[tm[k]];
                        }
                        else {
                            break
                        }
                    }
                    fs.writeFileSync('Needs/statistic', JSON.stringify(stat));
                }

            }
            //#########################################################################################   2 (реже всех)
            if (opt === '2') {
                var tm = {};
                var stat = JSON.parse(fs.readFileSync('Needs/statistic'));
                var finish = true;
                for (var key in mas) {
                    if (Object.keys(stat).indexOf(mas[key]) === -1) {
                        if (vol < fold_size) {
                            fs.unlinkSync('Library/' + mas[key]);
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
                            fold_size = fold_size - fs.statSync('Library/' + tm[k]).size;
                            fs.unlinkSync('Library/' + tm[k]);
                            delete stat[tm[k]];
                        }
                        if (vol > fold_size) {
                            break
                        }
                    }
                    fs.writeFileSync('Needs/statistic', JSON.stringify(stat));
                }
            }
            //#########################################################################################   3 (меньше всех)
            else if (opt === '3') {
                var stat = JSON.parse(fs.readFileSync('Needs/statistic'));
                for (var k = Object.keys(mas).length - 1; k > -1; k--) {
                    if (sum < vol) {
                        sum += parseInt(Object.keys(mas)[k]);
                    }
                    if (sum > vol) {
                        fs.unlinkSync('Library/' + mas[Object.keys(mas)[k]]);
                        if (Object.keys(stat).indexOf(mas[Object.keys(mas)[k]]) !== -1) {
                            delete stat[mas[Object.keys(mas)[k]]];
                        }
                    }
                }
                fs.writeFileSync('Needs/statistic', JSON.stringify(stat));
            }
            //#########################################################################################   4  (больше всех)
            else if (opt === '4') {
                var sum = 0;
                var stat = JSON.parse(fs.readFileSync('Needs/statistic'));
                for (key in mas) {
                    if (sum < vol) {
                        sum += parseInt(key);
                    }
                    if (sum > vol) {
                        fs.unlinkSync('Library/' + mas[key]);
                        if (Object.keys(stat).indexOf(mas[key]) !== -1) {
                            delete stat[mas[key]];
                        }
                    }
                }
            }
        }
    });
};