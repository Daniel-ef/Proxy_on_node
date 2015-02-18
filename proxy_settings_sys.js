var fs = require('fs');

module.exports = function(app, urlencodedParser, list_of_files) {


    //##################################################################     GET
    app.get('/:id?', function (req, res) {
        var id = req.params.id;
        console.log('GET   ' + id);

        // На каких портах поднимаются сервера

        if (id === 'port') {
            res.send(fs.readFileSync('Needs/port'));
        }

        // Черныё список

        else if (id === 'black_list') {
            var t = JSON.parse(fs.readFileSync('Needs/black_list'));
            try {
                t = t.join('\n');
            }
            catch (e) {
                t = '';
            }
            res.send(t);
        }
    });


    //##################################################################      POST
    app.post("/:id?", urlencodedParser, function (req, res) {
        var id = req.params.id;
        console.log('POST   ' + id);

        // На каких портах поднимать сервера

        if (id === 'port') {
            var pt = Object.keys(req.body);
            fs.writeFileSync('Needs/port', JSON.stringify(pt));
            res.send('OK');
        }

        // Смена пароля

        else if (id === 'change_pass') {
            var body = Object.keys(req.body)[0];
            var old_p = body.substring(0, body.indexOf('$'));
            var new_p = body.substring(body.indexOf('$') + 1, body.length);
            var lp = fs.readFileSync('Needs/pass', encode = 'utf-8');
            if (old_p === lp) {
                lp = new_p;
                res.send('OK');
                fs.writeFileSync('Needs/pass', lp, encode = 'utf-8');
            }
            else {
                res.status(201).send('BAD');
            }
        }

        // Чёрный список

        else if (id === 'black_list') {
            res.send('OK');
            var list = Object.keys(req.body)[0];
            if (list !== undefined) {
                list = list.split('\n');
                var i = 0;
                while (i < list.length) {
                    var l = list[i];
                    if (l === '' || l.indexOf('127.0.0.1') !== -1) {
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

                    i++;
                }
                fs.writeFileSync('Needs/black_list', JSON.stringify(list));
            }
            else {
                fs.writeFileSync('Needs/black_list', JSON.stringify([]));

            }
        }

        // Очистить ВСЁ

        else if (id === 'clear') {
            res.send('OK');
            var req = Object.keys(req.body)[0];
            var ob = {};
            list_of_files = [];
            if (req.substr(0, 1) === '1') {
                var fl = fs.readdirSync('Library');
                for (var i = 0; i < fl.length; i++) {
                    fs.unlinkSync('Library/' + fl[i]);
                }
                fs.rmdirSync('Library');
                fs.mkdirSync('Library');
                fs.writeFileSync('Needs/dic_of_links', JSON.stringify(ob));
                fs.writeFileSync('Needs/dic_of_names', JSON.stringify(ob));
                fs.writeFileSync('Needs/mods', JSON.stringify(ob));
                fs.writeFileSync('Needs/hash_dic', JSON.stringify(ob));
                fs.writeFileSync('Needs/size', 0, encode = 'utf-8');
            }
            if (req.substr(1, 1) === '1') {
                fs.writeFileSync('Needs/date_update', '1###1', encode = 'utf-8');
                fs.writeFileSync('Needs/min_len', '0', encode = 'utf-8');
                fs.writeFileSync('Needs/opt_cash', '0###NaN', encode = 'utf-8');
                fs.writeFileSync('Needs/pass', '12345678', encode = 'utf-8');
                fs.writeFileSync('Needs/port', JSON.stringify(['8000', '8080']));
                fs.writeFileSync('Needs/statistic', JSON.stringify(ob));
                fs.writeFileSync('Needs/not_cash', '', encode = 'utf-8');
            }
        }
    });
};