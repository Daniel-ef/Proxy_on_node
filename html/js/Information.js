function getXmlHttp(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
//############################################################################### base
function getadmin(){
    var host = document.location.host;
    var req=getXmlHttp();
    req.open('GET', 'http://' + host + '/admin-main.html', true);
    req.send(null);
}

function Submitting(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/pass', true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var password = document.getElementById("pass").value;

    req.onreadystatechange = function () {
        if (req.readyState == 4) {if (req.status == 200) {
            if (req.responseText == 'OK'){
                document.location.href = "http://" + host + "/admin-main.html";
            }
            else{
                alert('Неверно, введите заново...');
            }
        }
        }
    };
    req.send(password);
}
//#######################################################################     admin-1
function fill_in1(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host + '/main', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {if (req.status == 200) {
            var mas =req.responseText.split('$');
            document.getElementById('amount_libs').value = mas[0];
            document.getElementById('size_libs').value = mas[1];
            document.getElementById('size_economic').value = mas[2];
        }}

    };
    req.send(null);
}

//##########################################################################     admin-2

function fill_in2(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host + '/list', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {if (req.status == 200) {
            var mas = req.responseText.split('$');
            document.getElementById('textarea1').value = mas[0];
            document.getElementById('textarea2').value = mas[1];
            //document.getElementById('textarea2').cols = mas[2]-5;
        }}

    };
    req.send(null);
}

function disp(form, id) {
    if (form.style.display == "none") {
        form.style.display = "block";
    }
    var st = setInterval(function(){
        document.getElementById(id).style.display="none";
        clearInterval(st);
    }, 5000);
}

function bl() {
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host + '/black_list', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                document.getElementById('b_l').value = req.responseText;
        }
    }
    };
    req.send(null);
}

//#############################################################################     admin-3
function fill_in3(){
    upload_all();
    upload_group();
    list_del_all();
    list_del_group();
}



function upload_all(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host + '/upload_all', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                document.getElementById('dl_all').innerHTML = req.responseText.split('###')[0];
                document.getElementById('amount_of_libs').value = req.responseText.split('###')[1];
            }
        }
    };
    req.send(null);
}

function download_all(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/download_all', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var ch = [];
    for(var i = 0; i<parseInt(document.getElementById('amount_of_libs').value);i++){
        if(document.getElementById('upload_all'+ i.toString()).checked){
            ch.push(i);
        }
    }
    ch = ch.join('\n');
    if(ch!=''){
        req.send(ch);
        disp(document.getElementById('sys2'),'sys2');

    }
}


function upload_group(){
    var host = document.location.host;
    var req= getXmlHttp();
    req.open('GET', 'http://' + host + '/upload_group', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                document.getElementById('dl_group').innerHTML = req.responseText.split('###')[0];
                document.getElementById('amount_of_groups').value = req.responseText.split('###')[1];
            }
        }
    };
    req.send(null);
}

function download_group(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/download_group', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var ch = [];
    for(var i = 0; i<parseInt(document.getElementById('amount_of_groups').value);i++){
        if(document.getElementById('upload_group'+ i.toString()).checked){
            ch.push(document.getElementById('label_upload_group'+ i.toString()).textContent);
        }
    }
    ch = ch.join('\n');
    if(ch!=''){
        req.send(ch);
        disp(document.getElementById('sys3'),'sys3');
    }
}


function list_del_all(){
    var host = document.location.host;
    var req= getXmlHttp();
    req.open('GET', 'http://' + host + '/list_del_all', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                if(req.responseText != '###0') {
                    document.getElementById('del_all').innerHTML = req.responseText.split('###')[0];
                    document.getElementById('del_amount_of_all').value = req.responseText.split('###')[1];
                }
                else{
                    document.getElementById('del_all').innerHTML = '<p style="color:grey">Пусто</p>';
                    document.getElementById('del_amount_of_all').value = '0';
                }
            }
        }
    };
    req.send(null);
}

function del_all(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/del_all', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var ch = [];
    for(var i = 0; i<parseInt(document.getElementById('del_amount_of_all').value);i++){
        if(document.getElementById('del_upload_all'+ i.toString()).checked){
            ch.push(document.getElementById('del_upload'+ i.toString()).textContent);
        }
    }
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                list_del_all();
            }
        }
    };
    ch = ch.join('\n');
    if(ch!=''){
        req.send(ch);
        disp(document.getElementById('sys4'),'sys4');

    }
}


function list_del_group(){
    var host = document.location.host;
    var req= getXmlHttp();
    req.open('GET', 'http://' + host + '/list_del_group', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                if(req.responseText != '###0') {
                    var list = req.responseText.split('###');
                    for (var i = 0; i < list.length; i++) {
                        document.getElementById('del_group').innerHTML = req.responseText.split('###')[0];
                        document.getElementById('del_amount_of_group').value = req.responseText.split('###')[1];
                    }
                }
                else{
                    document.getElementById('del_group').innerHTML = '<p style="color:grey">Пусто</p>';
                    document.getElementById('del_amount_of_group').value = '0';
                }
            }
        }
    };
    req.send(null);
}

function del_group(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/del_group', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var ch = [];
    for(var i = 0; i<parseInt(document.getElementById('del_amount_of_group').value);i++){
        if(document.getElementById('del_upload_group' + i.toString()).checked){
            ch.push(document.getElementById('del_upload_gr'+ i.toString()).textContent);
        }
    }
    ch = ch.join('\n');
    if(ch!=''){
        req.send(ch);
        disp(document.getElementById('sys5'),'sys5');

    }
}







function check_all(){
    for(var i = 0;i<parseInt(document.getElementById('amount_of_libs').value);i++){
        document.getElementById('upload_all'+ i.toString()).checked = true;
    }
}

function uncheck_all(){
    for(var i = 0;i<parseInt(document.getElementById('amount_of_libs').value);i++){
        document.getElementById('upload_all'+ i.toString()).checked = false;
    }
}

function check_group(){
    for(var i = 0;i<parseInt(document.getElementById('amount_of_groups').value);i++){
        document.getElementById('upload_group'+ i.toString()).checked = true;
    }
}

function uncheck_group(){
    for(var i = 0;i<parseInt(document.getElementById('amount_of_groups').value);i++){
        document.getElementById('upload_group'+ i.toString()).checked = false;
    }
}

function del_check_all(){
    for(var i = 0;i<parseInt(document.getElementById('del_amount_of_all').value);i++){
        document.getElementById('del_upload_all'+ i.toString()).checked = true;
    }
}

function del_uncheck_all(){
    for(var i = 0;i<parseInt(document.getElementById('del_amount_of_all').value);i++){
        document.getElementById('del_upload_all'+ i.toString()).checked = false;
    }
}

function del_check_group(){
    for(var i = 0;i<parseInt(document.getElementById('del_amount_of_group').value);i++){
        document.getElementById('del_upload_group'+ i.toString()).checked = true;
    }
}

function del_uncheck_group(){
    for(var i = 0;i<parseInt(document.getElementById('del_amount_of_group').value);i++){
        document.getElementById('del_upload_group'+ i.toString()).checked = false;
    }
}

//#############################################################################     admin-4

function radio() {
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/radio', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var vol = document.getElementById('vol').value;
    if(vol == '' && document.getElementById('limit_check').checked === true){
        alert('Задайте объём кэша!');
    }
    else if(!parseInt(vol) || parseInt(vol).toString().length != vol.length){
        if(document.getElementById('limit_check').checked === true){
            alert('Значение объёма должно быть числом!');
        }
    }
    for (var i = 1; i < 5; i++) {
        if (document.getElementById('Cash' + i.toString()).checked && document.getElementById('limit_check').checked === true) {
            req.send(i.toString()+vol);
            disp(document.getElementById('sys1'),'sys1');
            break
        }
    }
}

function infin(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/radio', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    for (var i = 1; i < 5; i++) {
        document.getElementById('Cash' + i.toString()).checked = false;
    }
    document.getElementById('infin_check').checked = true;
    document.getElementById('vol').disabled = true;
    document.getElementById('vol').value= '';
    document.getElementById('limit_check').checked = false;
    for(var i = 1; i < 5; i++){
        document.getElementById('Cash'+ i.toString()).disabled = true;
    }
    req.send('0');
}

function limit(){
    document.getElementById('vol').disabled = false;
    document.getElementById('infin_check').checked = false;
    document.getElementById('limit_check').checked = true;
    for(var i = 1; i < 5; i++){
        document.getElementById('Cash'+ i.toString()).disabled = false;
    }
}

function update_libs(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host + '/update_libs', true);
    req.send(null);
}


function add_link(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/add_link', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(document.getElementById('links').value);
    disp(document.getElementById('sys6'),'sys6');

}

function min_len(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/min_len', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(document.getElementById('min_length').value);
    disp(document.getElementById('sys7'),'sys7');
}

function dont_cash(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/not_cash', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(document.getElementById('not_cash').value);
    disp(document.getElementById('sys9'),'sys9');
}

function dont_cash_list(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host + '/not_cash_list', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                document.getElementById('not_cash').value = req.responseText;
            }
        }
    };
    req.send(null);
}


function fill_in4() {

    dont_cash_list();
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host + '/infin_check', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                var opt = req.responseText.split('###');
                if(opt[0] === '0'){
                    document.getElementById('infin_check').checked = true;
                    document.getElementById('vol').disabled = true;
                    for(var i = 1; i < 5; i++){
                        document.getElementById('Cash'+ i.toString()).disabled = true;
                    }
                }
                else{
                    document.getElementById('vol').value= (parseInt(opt[1]) / 1024).toString();
                    document.getElementById('Cash'+opt[0]).checked = true;
                    document.getElementById('limit_check').checked = true;
                }
                document.getElementById('min_length').value = opt[2];
            }
        }
    };
    req.send(null);
}


//##############################################################################    admin-5


function fill_in5(){
    bl();
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://' + host +  '/port', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {if (req.status == 200) {
            var port_js = parseInt(JSON.parse(req.responseText)[0]);
            var port_int = parseInt(JSON.parse(req.responseText)[1]);
            document.getElementById('port_js').value = port_js;
            document.getElementById('port_int').value = port_int;

        }}

    };
    req.send(null);
}

function send_port() {
    var host = document.location.host;
    var p_js = document.getElementById('port_js').value;
    var p_int = document.getElementById('port_int').value;
    if(!parseInt(p_js) || !parseInt(p_int)){
        alert('Порт должен быть числом!');
    }
    else if(parseInt(p_js).toString().length !== p_js.length || parseInt(p_int).toString().length !== p_int.length){
        alert('Порт должен быть числом!');
    }
    else if( p_js == p_int){
            alert('Порты js-сервера и интерфейса не должны совпадать!')
        }
    else if (p_js > 1023 && p_js < 65536 && p_js > 1023 && p_js < 65536) {
        var req = getXmlHttp();
        req.open('POST', 'http://' + host + '/port', true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send(p_js+'&'+p_int);
        disp(document.getElementById('suc1'), 'suc1');
        }
    else{
        alert('Номер порта должен быть в диапозоне 1024-65535!');
    }
}

function change_pass() {
    var host = document.location.host;
    var old_pass = document.getElementById('old_pass').value;
    var new_pass = document.getElementById('new_pass').value;
    var new_pass_ag = document.getElementById('new_pass_ag').value;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/change_pass', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                disp(document.getElementById('suc2'), 'suc2');
                }
            }
            else {
                alert('Указанный пароль неверен, поробуйте ещё раз');
            }
        };
        if (new_pass != new_pass_ag) {
            alert('Пароли не совпадают, введите, пожалуйста, ещё раз!');
            document.getElementById('new_pass').value = '';
            document.getElementById('new_pass_ag').value = '';
        }
        else if (new_pass.length < 7) {
            alert('Пароль должен быть длиннее 6 символов!');
            document.getElementById('new_pass').value = '';
            document.getElementById('new_pass_ag').value = '';
        }
        else if (old_pass == new_pass) {
            alert('Старый и новый пароли совпадают, измените пароль!');
            document.getElementById('new_pass').value = '';
            document.getElementById('new_pass_ag').value = '';
        }
        else {
            req.send(old_pass + '$' + new_pass);
        }
    }




function black_list() {
    var host = document.location.host;
    var list = document.getElementById('b_l').value;
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/black_list', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(list);
    disp(document.getElementById('suc4'), 'suc4');

}

function update(){
    var host = document.location.host;
    for(var i = 1; i< 5; i++){
        if(document.getElementById('up'+ i.toString()).selected){
            var date = document.getElementById('up'+ i.toString()).value;
        }

    }
    if(document.getElementById('up_by_push').checked){
        var up_by_push = '1';
    }
    else{
        var up_by_push = '0';
    }
    var req = getXmlHttp();
    req.open('POST', 'http://' + host + '/update', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(date + '###' + up_by_push);
    disp(document.getElementById('suc3'), 'suc3');

}

function clear_it(){
    var host = document.location.host;
    var req = getXmlHttp();
    var mas = '';
    req.open('POST','http://' + host + '/clear',true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if(document.getElementById('clear_cash').checked){
        mas='1';
    }
    else{
        mas='0';
    }
    if(document.getElementById('clear_sets').checked){
        mas+='1';
    }
    else{
        mas+='0';
    }
    req.send(mas);
    disp(document.getElementById('suc8'), 'suc8');
}

function check_updating(){
    var host = document.location.host;
    var req = getXmlHttp();
    req.open('GET', 'http://'+host+'/check_updating',true);
    req.send(null);
}