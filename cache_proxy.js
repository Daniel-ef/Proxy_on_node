var http = require('http');
var net = require('net');
var url = require('url');
var sys  = require('sys');
var c_m = require('./cache_modules');
var fs = require('fs');

module.exports = function(filelist, po_rt,black_list,black_list_html,min_len,not_cash) {
    var server = http.createServer(function (request, response) {
        sys.log(request.url);
        var uri = c_m.parse_url(request.url);
        if (c_m.substitute(request.url, request.method, request, response, filelist, not_cash)) {
        }
        else if (black_list.indexOf(uri) !== -1) {
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

            proxyRequest.on('error', function (err) {
                response.writeHead(404);
                response.end(err.stack);
            });

            proxyRequest.on('response', function (proxyResponse) {
                proxyResponse.on('data', function (chunk) {
                    response.write(chunk, 'binary')
                });
                proxyResponse.on('end', function () {
                    response.end()
                });
                response.writeHead(proxyResponse.statusCode, proxyResponse.headers);
                var length = proxyResponse.headers['content-length'];
                c_m._download_new(length, request.url, filelist, min_len, response);
            });
            request.on('data', function (chunk) {
                proxyRequest.write(chunk, 'binary');
            });
            request.on('end', function () {
                proxyRequest.end();
            })
        }
    }).on('connect', function (request, socketRequest, head) {
        console.log(request.url);
        var ph = url.parse('http://' + request.url);
        var socket = net.connect(ph.port, ph.hostname, function () {
            socket.write(head);
            // Сказать клиенту, что соединение установлено
            socketRequest.write("HTTP/" + request.httpVersion + " 200 Connection established\r\n\r\n")
        });
        // Туннелирование к хосту
        socket.on('data', function (chunk) {
            socketRequest.write(chunk)
        });
        socket.on('end', function () {
            socketRequest.end()
        });
        socket.on('error', function () {
            // Сказать клиенту, что произошла ошибка
            socketRequest.write("HTTP/" + request.httpVersion + " 500 Connection error\r\n\r\n");
            socketRequest.end()
        });
        // Туннелирование к клиенту
        socketRequest.on('data', function (chunk) {
            socket.write(chunk)
        });
        socketRequest.on('end', function () {
            socket.end()
        });
        socketRequest.on('error', function () {
            socket.end()
        })
    }).listen(po_rt);

    process.on('uncaughtException', function (er) {
        console.error(er.stack);
    });
    sys.log("Proxy is up and listening: 127.0.0.1:"+po_rt);
};


