var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');
var request = require('request');
var sys = require('sys');
var c_m = require('./cache_modules');


module.exports = function(list_of_files) {

    //time = new Date().getTime() - 60 * 5 * 1000;
    /* serves main page */

    app.get("/", function (req, res) {
        res.sendFile(__dirname + '/html/index.html');
    });

    app.use(express.static('html'));

    require('./proxy_settings_d&up')(app,urlencodedParser); // Загрузка и удаление

    require('./proxy_settings_cache')(app,urlencodedParser); // Настройки кэша

    require('./proxy_settings_sys')(app,urlencodedParser, list_of_files); // Системные настройки



    app.get('/:id?', function (req, res) {
        var id = req.params.id;
        console.log('GET   ' + id);
        if (id === 'main') {
            var libs = fs.readdirSync('Library/');
            var amount_libs = libs.length.toString();
            var size_libs = 0;
            for (var i = 0; i < libs.length; i++) {
                var size = fs.statSync('Library/' + libs[i])['size'];
                size_libs = size_libs + size;
            }
            size_libs = Math.round(size_libs / 1000).toString();
            var size_economic = Math.round(fs.readFileSync('Needs/size') / 1000).toString();
            var response = amount_libs + '$' + size_libs + '$' + size_economic;
            res.send(response);
        }
        else if (id === 'list') {
            var libs = fs.readdirSync('Library/').join('\n');
            var mods = JSON.parse(fs.readFileSync('Needs/mods'));
            var names = JSON.parse(fs.readFileSync('Needs/dic_of_names'));
            var mods1 = [];
            var names1 = [];
            var len = 0;
            for (var i = 0; i < Object.keys(mods).length; i++) {
                mods1.push(names[Object.keys(mods)[i]] + '     ' + mods[Object.keys(mods)[i]]);
                if ((names[Object.keys(mods)[i]] + '     ' + mods[Object.keys(mods)[i]]).length > len) {
                    len = (names[Object.keys(mods)[i]] + '     ' + mods[Object.keys(mods)[i]]).length;
                }

            }
            mods1 = mods1.join('\n');
            var response = libs + '$' + mods1 + '$' + len.toString();
            res.send(response);
        }

        else if (id === 'pum') {
            res.send('OK');
        }
        /*else if(id.indexOf('admin') !== -1 && Math.abs(time - new Date().getTime()) / 1000 / 60 > 5) {
            res.sendFile(__dirname + '/html/index.html')
        }
        */
    });




    app.post("/:id?", urlencodedParser, function (req, res) {/////////////////////////////////////////   POST

        var id = req.params.id;
        console.log('POST   ' + id);

        if (id === 'pass') {
            var pass = Object.keys(req.body)[0];
            var lp = fs.readFileSync('Needs/pass', encode = 'utf-8');
            if (pass === lp) {
                time = new Date().getTime();
                res.send("OK");
            }
            else {
                res.send("Ignore");
            }
        }

    });


    var po_rt = parseInt(JSON.parse(fs.readFileSync('Needs/port'))[1]);
    var port = process.env.PORT || po_rt;

    app.listen(port, function () {
        sys.log("express is up and listening: 127.0.0.1:" + port);
    });
};