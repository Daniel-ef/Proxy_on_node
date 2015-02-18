function kavanga_appendZP(url){
    var gif = document.createElement('img');
    gif.src = url;
    with (gif.style){
	width = '1px';
	height = '1px';
	position = 'absolute';
	display = 'block';
	visibility = 'hidden';
	top = '0px';
	left = '0px';
    }
    var s = document.getElementsByTagName('script');
    s[s.length-1].parentNode.appendChild(gif);
}

function kavanga_appendJS(url, async){
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.async = (async) ? true : false;
    js.src = url;
    var s = document.getElementsByTagName('script'); 
    //s.parentNode.insertBefore(js, s); 
    s[s.length-1].parentNode.appendChild(js); 
}

  var _rutarget = _rutarget || [];
  var o = {'event': 'otherPage', 'kavangaPixel': 'true'};
  if ('undefined' != typeof(_kparams) ) {
    if('undefined' != _kparams.referer) o.referrer = _kparams.referer;
  }
  _rutarget.push(o);

(function () {
})();
