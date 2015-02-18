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

function getadmin(){
    var req=getXmlHttp();
    req.open('GET', 'http://127.0.0.1:8080/admin.html', true);
    req.send(null);
}

function Submitting(){
    var req = getXmlHttp();
    req.open('POST', 'http://127.0.0.1:8080/log&pass', true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var login = document.getElementById("log").value;
    var password = document.getElementById("pass").value;

    req.onreadystatechange = function () {
        if (req.readyState == 4) {if (req.status == 200) {
            if (req.responseText == 'OK'){
                document.location.href = "http://127.0.0.1:8080/admin-1.html";
            }
            else{
                alert('Неверно, введите заново...');
            }
        }
        }
    };
    req.send(login+'$'+password);
}