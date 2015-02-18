var http = require('http');
var net = require('net');
var url = require('url');
var sys  = require('sys');
var Sub = require('./Sub');
//var exp = require('./../express');
var fs = require('fs');

//exp.Express();


var filelist = fs.readdirSync('Library1');
var po_rt = parseInt(JSON.parse(fs.readFileSync('Needs/port'))[0]);
var black_list = JSON.parse(fs.readFileSync('Needs/black_list'));
var black_list_html = fs.readFileSync('Needs/black_list.txt');
var up_date = fs.readFileSync('Needs/date_update', encode='utf-8');


var server = http.createServer(function(request, response) {
    sys.log(request.url);
    var uri = Sub.pasrse_url(request.url);
    if (Sub.substitute(request.url, request.method, request, response, filelist) === true) {
    }
    else if(Object.keys(black_list).indexOf(uri) !== -1){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(black_list_html);
    }
    else {
        var ph = url.parse(request.url);
        var options = {
            port: ph.port,
            hostname: ph.hostname,
            method: request.method,
            path: ph.path,
            headers: request.headers
        };
        var proxyRequest = http.request(options);
        proxyRequest.on('response', function (proxyResponse) {
            proxyResponse.on('data', function (chunk) {
                response.write(chunk, 'binary')
            });
            proxyResponse.on('end', function () {
                response.end()
            });
            response.writeHead(proxyResponse.statusCode, proxyResponse.headers);
            var length = proxyResponse.headers['content-length'];
            Sub._download_new(length, request.url, filelist);
        });
        request.on('data', function (chunk) {
            proxyRequest.write(chunk, 'binary');
        });
        request.on('end', function () {
            proxyRequest.end();
        })
    }
}).on('connect', function(request, socketRequest, head) {
    console.log(request.url);
    var ph = url.parse('http://' + request.url);
    var socket = net.connect(ph.port, ph.hostname, function() {
        socket.write(head);
        // Сказать клиенту, что соединение установлено
        socketRequest.write("HTTP/" + request.httpVersion + " 200 Connection established\r\n\r\n")
    });
    // Туннелирование к хосту
    socket.on('data', function(chunk) { socketRequest.write(chunk) })
    socket.on('end', function() { socketRequest.end() })
    socket.on('error', function() {
        // Сказать клиенту, что произошла ошибка
        socketRequest.write("HTTP/" + request.httpVersion + " 500 Connection error\r\n\r\n")
        socketRequest.end()
    });
    // Туннелирование к клиенту
    socketRequest.on('data', function(chunk) { socket.write(chunk) })
    socketRequest.on('end', function() { socket.end() })
    socketRequest.on('error', function() { socket.end() })
}).listen(8000);


var t = [];
var d = new Date();
t[0] = 0;
t[1] = d.getMonth();
t[2] = d.getFullYear();
fs.writeFileSync('Needs/time',JSON.stringify(t));


var tf = JSON.parse(fs.readFileSync('Needs/time'));
if(up_date.split('###')[1] === '1'){
    //Sub.time_up(tf);
}
var times = setInterval(function () {
    Sub.time_up(tf);
}, 1000*60*60*24*parseInt(up_date.split('###')[0]));

sys.log("Proxy is up and listening: 127.0.0.1:"+po_rt);