var http = require('http');
var sys  = require('sys');
var Sub = require('./Sub');
var fs = require('fs');
var https = require('https');



var filelist = fs.readdirSync('Library');
var po_rt = parseInt(JSON.parse(fs.readFileSync('Needs/port'))[0]);
var black_list = JSON.parse(fs.readFileSync('Needs/black_list'));
var black_list_html = fs.readFileSync('Needs/black_list.txt');



    http.createServer(function (request, response) {
        sys.log(request.connection.remoteAddress + ": " + request.method + " " + request.url);
        var url = Sub.pasrse_url(request.url);
        if (Sub.substitute(request.url, request.method, request, response, filelist) === true) {
        }
        else if(black_list.indexOf(url) !== -1){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(black_list_html);
            }
        else {
            var proxy = http.createClient(80, request.headers['host']);
            var proxy_request = proxy.request(request.method, request.url, request.headers);
            proxy_request.addListener('response', function (proxy_response) {
                proxy_response.addListener('data', function (chunk) {
                    response.write(chunk, 'binary');
                });
                proxy_response.addListener('end', function () {
                    response.end();
                });
                response.writeHead(proxy_response.statusCode, proxy_response.headers);
                var length = proxy_response.headers['content-length'];
                Sub._download_new(length, request.url, filelist);

            });

            request.addListener('data', function (chunk) {
                proxy_request.write(chunk, 'binary');
            });

            request.addListener('end', function () {
                proxy_request.end();
            });
        }
    }).listen(po_rt);



var t = [];
var d = new Date();
t[0] = 0;
t[1] = d.getMonth();
t[2] = d.getFullYear();
fs.writeFileSync('Needs/time',JSON.stringify(t));


var tf = JSON.parse(fs.readFileSync('Needs/time'));
Sub.time_up(tf);
var times = setInterval(function () {
    Sub.time_up(tf);
    }, 1000*60*60*24*3);



console.log("Proxy is up and listening: 127.0.0.1:"+po_rt);