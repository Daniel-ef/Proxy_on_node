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
//#######################################################################     admin-1
function fill_in1(){
    var req = getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/static', true);
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
    var req = getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/list', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {if (req.status == 200) {
            var mas = req.responseText.split('$');
            document.getElementById('textarea1').value = mas[0];
            document.getElementById('textarea2').value = mas[1];
            document.getElementById('mods').value = mas[2];
            document.getElementById('mods').cols = mas[3]-5;
        }}

    };
    req.send(null);
}

function disp(form) {
    if (form.style.display == "none") {
        form.style.display = "block";
}}

function bl() {
    var req = getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/black_list', true);
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

function radio() {
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/radio', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var vol = document.getElementById('vol').value;
    if(vol == ''){
        alert('Задайте объём кэша!');
    }
    else if(!parseInt(vol) || parseInt(vol).toString().length != vol.length){
        alert('Значение объёма должно быть числом!');
    }
    for (var i = 1; i < 5; i++) {
        if (document.getElementById('Cash' + i.toString()).checked) {
            req.send(i.toString()+vol);
            break
        }
    }
}

function infin(){
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/radio', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    for (var i = 1; i < 5; i++) {
        document.getElementById('Cash' + i.toString()).checked = false;
    }
    document.getElementById('vol').value= '';
    req.send('0');
}

function upload_all(){
    var req = getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/upload_all', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                /*var list = req.responseText.split('\n');
                list.pop(1);
                for(var i = 0;i<list.length;i++){
                    document.getElementById('dl_all').innerHTML = document.getElementById('dl_all').innerHTML + '<label class="checkbox"><input type="checkbox" id="upload_all' + i.toString() + '" value="">' + list[i] + '</label>'
                }
                document.getElementById('amount_of_libs').value = list.length;
                */
                document.getElementById('dl_all').innerHTML = req.responseText.split('###')[0];
                document.getElementById('amount_of_libs').value = req.responseText.split('###')[1];
            }
        }
    };
    req.send(null);
}

function download_all(){
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/download_all', true);
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
    }
}


function upload_group(){
    var req= getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/upload_group', true);
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
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/download_group', true);
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
    }
}


function list_del_all(){
    var req= getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/list_del_all', true);
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
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/del_all', true);
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
    }
}


function list_del_group(){
    var req= getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/list_del_group', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                if(req.responseText != '###0') {
                    var list = req.responseText.split('\n');
                    for (var i = 0; i < list.length; i++) {
                        document.getElementById('del_group').innerHTML = req.responseText.split('###')[0];;
                        document.getElementById('del_amount_of_group').value = req.responseText.split('###')[1];;
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
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/del_group', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var ch = [];
    for(var i = 0; i<parseInt(document.getElementById('del_amount_of_group').value);i++){
        if(document.getElementById('del_upload_group' + i.toString()).checked){
            ch.push(document.getElementById('del_upload_group'+ i.toString()).textContent);
        }
    }
    ch = ch.join('\n');
    if(ch!=''){
        req.send(ch);
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
    for(var i = 0;i<parseInt(document.getElementById('del_amount_of_groups').value);i++){
        document.getElementById('del_upload_group'+ i.toString()).checked = true;
    }
}

function del_uncheck_group(){
    for(var i = 0;i<parseInt(document.getElementById('del_amount_of_groups').value);i++){
        document.getElementById('del_upload_group'+ i.toString()).checked = false;
    }
}

function add_link(){
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/add_link', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(document.getElementById('links').value);
}



function fill_in3() {
    upload_all();
    upload_group();
    list_del_all();
    list_del_group();
}

//##############################################################################    admin-4


function fill_in4(){
    bl();
    var req = getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/port', true);
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
        req.open('POST', 'http://127.0.0.1:8080/port', true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send(p_js+'&'+p_int);
        disp(document.getElementById('suc1'));
    }
    else{
        alert('Номер порта должен быть в диапозоне 1024-65535!');
    }
}

function change_pass() {
    var old_pass = document.getElementById('old_pass').value;
    var new_pass = document.getElementById('new_pass').value;
    var new_pass_ag = document.getElementById('new_pass_ag').value;
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/change_pass', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                disp(document.getElementById('suc2'));
            }
            else {
                alert('Указанный пароль неверен, поробуйте ещё раз');
            }
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
    var list = document.getElementById('b_l').value;
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/black_list', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(list);
}

function update(){
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
    req.open('POST', 'http://127.0.0.1:8080/update', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(date + '###' + up_by_push);
}
