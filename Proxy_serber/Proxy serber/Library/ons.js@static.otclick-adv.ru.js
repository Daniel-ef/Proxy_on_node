
if (typeof _MT_OtclickObjects == 'undefined') {
	var _MT_OtclickObjects = [];
}

function _MT_OtclickRun()
{
	if (! window._ons) {
		setTimeout(_MT_OtclickRun, 100);
		return;
	}

	window._MT_OtclickLayers = [];
	elements = document.getElementsByTagName('div');

	for (k = 0; k < elements.length; k++)
		if( elements[k].id === '_vcs_container[]_' || elements[k].id.indexOf( '_vcs_container_' ) != -1 )
			window._MT_OtclickLayers.push(elements[k]);

	if (! window._MT_OtclickLayers.length)
		return;

	_MT_OtclickObjects[_MT_OtclickObjects.length] = new OtclickBanner(window._ons);
	_MT_OtclickObjects[_MT_OtclickObjects.length - 1].run();
	window._ons = '';
}

function _ons_ev(ev,index)
{
	ad = _MT_OtclickObjects[index].ad;

	switch (ev) {
		case 'click':
			if (ad.click_counter_url && ad.click_counter_url.length > 0 && ad.click_counter_url.charAt(0) != '{')
				_MT_OtclickObjects[index].cacheFile(ad.click_counter_url);
			break;
		case 'close':
			break;
		case 'ready':
			if (! ad.trace) {
				_MT_OtclickObjects[index].ad.trace = true;
				if (ad.trace_url && ad.trace_url.length > 0 && ad.trace_url.charAt(0) != '{')
					_MT_OtclickObjects[index].cacheFile(ad.trace_url + '&ul=' + _MT_OtclickObjects[index].location);
				if (ad.tracing_url && ad.tracing_url.length > 0 && ad.tracing_url.charAt(0) != '{')
					_MT_OtclickObjects[index].cacheFile(ad.tracing_url);
				if (ad.show_counter_url && ad.show_counter_url.length > 0 && ad.show_counter_url.charAt(0) != '{')
					_MT_OtclickObjects[index].cacheFile(ad.show_counter_url);
			}
			break;
		case 'quarter':
			if (ad && ad.evq) {
				_MT_OtclickObjects[index].cacheFile(ad.evq);
			}
			break;
		case 'half':
			if (ad && ad.evh) {
				_MT_OtclickObjects[index].cacheFile(ad.evh);
			}
			break;
		case 'threequarters':
			if (ad && ad.evtq) {
				_MT_OtclickObjects[index].cacheFile(ad.evtq);
			}
			break;
		case 'complete':
			if (ad && ad.evc) {
				_MT_OtclickObjects[index].cacheFile(ad.evc);
			}
			break;
	}
}

function OtclickBanner(ad) {
	this.ad = ad;
	this.params = {
		'info_url' : 'http://otclick-adv.ru/'
	};
	this.location = escape(window.location.href);
	this.index = _MT_OtclickObjects.length;

	this.run = function() {
		var ons_empty = true;
		for(var prop in this.ad) {
			if(this.ad.hasOwnProperty(prop)) {
				ons_empty = false;
				break;
			}
		}
		if (ons_empty)
			return;

		if (typeof this.ad.visitor_id != 'undefined') {
			this.cacheFile('http://advombat.ru/0.gif?pid=OTCKLICK&id=' + this.ad.visitor_id);
//			this.cacheFile('http://st.targetix.net/match?id=12&vid=' + this.ad.visitor_id);
		}

		var o = window._MT_OtclickLayers[this.index];
		if (! o)
			return;

		if (this.ad.video_url.match(/\.[sf][wl][fv]$/i)) {
			if (this.flashVersion())
				this.showBanner(o);
			else
				if (this.ad.image_url != '')
					this.showImage(o,this.ad.image_url);
		} else
			this.showImage(o,this.ad.video_url);
	}

	this.showBanner = function(ct) {
		var o, v;
		v = 'clickTAG=' + escape(this.ad.click_url + '&ul=' + this.location) + '&fileURL=' + escape(this.ad.video_url) + '&vendorLink=' + escape(this.params.info_url) + '&statScript=' + escape("_ons_ev,{event}," + this.index) + '&infinite=true';
		for (var k in this.ad.flash_vars)
			v += '&' + k + '=' + this.ad.flash_vars[k];
		if (this.ad.cwidth && this.ad.cwidth != '0')
			this.ad.width = this.ad.cwidth;
		if (this.ad.cheight && this.ad.cheight != '0')
			this.ad.height = this.ad.cheight;

		v += '&autoPlay=true';
		v += '&userAgent=' + escape(navigator.userAgent);
		if (typeof this.ad.internalClick != 'undefined' && this.ad.internalClick == '1')
			v += '&internalClick=true';

		o = '<object id="_vcs_flash[' + this.index + ']_" width="' + this.ad.width + '"  height="' + this.ad.height + '" data="' + this.ad.flash_url + '" type="application/x-shockwave-flash">';
		o += '<param name="movie" value="' + this.ad.flash_url + '"/>';
		o += '<param name="quality" value="high"/>';
		o += '<param name="wmode" value="opaque"/>';
		o += '<param name="bgcolor" value="#ffffff"/>';
		o += '<param name="scale" value="exactfit"/>';
		o += '<param name="swliveconnect" value="true"/>';
		o += '<param name="allowscriptaccess" value="always"/>';
		o += '<param name="allowFullScreen" value="true"/>';
		o += '<param name="flashvars" value=\'' + v + '\'>';
		o += '</object>';

		ct.innerHTML = o;
		ct.style.width = this.ad.width;
		ct.style.height = this.ad.height;
		ct.style.margin = '0';
		ct.style.padding = '0';
		ct.style.marginLeft = 'auto';
		ct.style.marginRight = 'auto';
	}

	this.showImage = function(ct,img) {
		var o;
		
		if (this.ad.cwidth && this.ad.cwidth != '0')
			this.ad.width = this.ad.cwidth;
		if (this.ad.cheight && this.ad.cheight != '0')
			this.ad.height = this.ad.cheight;

		o = '<a href="' + this.ad.click_url + '&ul=' + this.location + '" target="_blank">';
		o += '<img src="' + img + '" border=0 width="' + this.ad.width + '" height="' + this.ad.height + ' title="" alt="" />';
		o += '</a>';

		ct.innerHTML = o;
		ct.style.width = this.ad.width;
		ct.style.height = this.ad.height;
		ct.style.margin = '0';
		ct.style.padding = '0';
		ct.style.marginLeft = 'auto';
		ct.style.marginRight = 'auto';

		if (this.ad.trace_url && this.ad.trace_url.length > 0)
			this.cacheFile(this.ad.trace_url + '&ul=' + this.location);
		if (this.ad.tracing_url && this.ad.tracing_url.length > 0)
			this.cacheFile(this.ad.tracing_url);
	}

	this.cacheFile = function(u) {
		(new Image(1, 1)).src = u.replace('{rid}', Math.random()); 
	}

	this.getPosY = function(o) {
		var y = 0;

		if (o.offsetParent) {
			while (o) {
				y += o.offsetTop;
				o = o.offsetParent;
			}
		} else {
			if (o.y) {
				y = o.y;
			}
		}
		return y;
	}

	this.getPageHeight = function() {
		var y;
		
		if (typeof window.innerHeight == 'number') {
			y = window.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight) {
			y = document.documentElement.clientHeight;
		} else if (document.body.clientHeight) {
			y = document.body.clientHeight;
		}

		return y;
	}

	this.getScrollY = function() {
		var y = 0;
		if (typeof window.pageYOffset == 'number') {
			y = window.pageYOffset;
		} else if (document.body && document.body.scrollTop) {
			y = document.body.scrollTop;
		} else if (document.documentElement && document.documentElement.scrollTop) {
			y = document.documentElement.scrollTop;
		}
		return y;
	}

	this.flashVersion = function() {
		// Стартовые переменные
		var version = false;
		var newversion;
		var lastVersion = 10; // c запасом
		var i;
		var plugin;

		if (this.isIE()) { // browser == IE
			try {
				for (i = 3; i <= lastVersion; i++) {
					if (eval('new ActiveXObject("ShockwaveFlash.ShockwaveFlash.'+i+'")')) {
						version = i;
					}
				}
			} catch(e) {
			}
		} else { // browser != IE
			for (i in navigator.plugins) {
				plugin = navigator.plugins[i];
				if (plugin.name == undefined) continue;
				if (plugin.name.indexOf('Flash') > -1) {
					newversion = /\d+/.exec(plugin.description);
					if (newversion == null)
						newversion = 0;
					if (newversion > version)
						version = newversion;
				}
			}
		}

		return version;
	}

	this.isIE = function() {
		var ua = navigator.userAgent.toLowerCase();
		return (ua.indexOf('msie') != -1 && ua.indexOf('opera') == -1 && ua.indexOf('webtv') == -1);
	}
}

_MT_OtclickRun();

function _MT_SearchPhrases() {
	if (document.referrer == '' || window._mt_search_phrases)
		return;
	window._mt_search_phrases = true;

	engines = [
		{ start:'http://www.google.', query:'q', name:'google' },
		{ start:'http://yandex.', query:'text', name:'yandex' },
		{ start:'rambler.ru/search', query:'query', name:'rambler' },
		{ start:'http://go.mail.ru/', query:'q', name:'mailru' },
		{ start:'http://www.bing.com/', query:'q', name:'bing' },
		{ start:'search.yahoo.com/search', query:'p', name:'yahoo' },
		{ start:'http://ru.ask.com/', query:'q', name:'ask' },
		{ start:'http://search.qip.ru/search', query:'query', name:'qip' }
	];

	var ref = document.referrer, req="", engine="", start;
	for (var i in engines) {
		if (! engines.hasOwnProperty(i))
			continue;
		if (ref.indexOf(engines[i].start) == -1)
			continue;
		start = ref.indexOf('?' + engines[i].query + '=')
		if (start == -1) {
			start = ref.indexOf('&' + engines[i].query + '=');
		if (start == -1)
			return;
		}
		engine = engines[i].name;
		req = engines[i].query;
	}

	if (! engine)
		return;

	ref = ref.substr(start + req.length + 2);
	var end = ref.indexOf('&');
	if (end != -1)
		ref = ref.substr(0, end);

	ref = decodeURIComponent(ref).replace(/[+]+/g, ' ');

	if (ref) {
		var charset = document.characterSet ? document.characterSet : document.charset;
		(new Image(1, 1)).src = 'http://otclick-adv.ru/core/info.gif?sp=' + ref + '&enc=' + charset + '&eng=' + engine;
	}
}

_MT_SearchPhrases();

function _MT_SendToTns() {
	var tags = document.getElementsByTagName('script');
	var placeId = 0;
	for (var i = tags.length - 1; i > 0 && ! placeId; --i) {
		var pos = tags[ i ].src.toLowerCase().indexOf('otclick-adv.ru/core/code');
		if (pos != -1) {
			placeId = decodeURI(tags[ i ].src.substring(pos));
			placeId = parseInt(placeId.substring(placeId.indexOf('pid=') + 'pid='.length));
		}
	}

	if (! placeId)
		return;

	var category = 0;

	if (! category) {
		var p_channels = ['otclick_hitech',
			1345, 1279, 1222, 1216, 1185, 946, 707, 702, 645, 642, 578, 577, 575, 574, 573, 572, 571, 566, 539, 538,
			401, 334, 280, 243, 216, 120, 119, 100, 39, 38, 437, 406, 394, 330, 329, 226, 209, 206, 181, 180, 179,
			174, 148, 139, 124, 114, 109, 108, 105, 103, 102, 101, 98, 83, 26, 22, 21, 8];
		for (var i = 1; ! category && i < p_channels.length; ++i)
			if (p_channels[ i ] == placeId)
				category = p_channels[ 0 ];
	}
	if (! category) {
		var p_channels = ['otclick_tourism',
			1348, 1347, 1313, 1312, 1265, 948, 930, 890, 869, 772, 771, 770, 769, 338, 337, 208, 207, 202, 196, 195, 20,
			19, 920, 919, 907, 906, 852, 851, 703, 699, 694, 693, 692, 580, 579, 525, 518];
		for (var i = 1; ! category && i < p_channels.length; ++i)
			if (p_channels[ i ] == placeId)
				category = p_channels[ 0 ];
	}
	if (! category) {
		var p_channels = ['otclick_businessfinance',
			1356, 1340, 1339, 1302, 1300, 1299, 1288, 1287, 1256, 1255, 1228, 1219, 1194, 980, 979, 888, 785, 779, 721,
			720, 714, 453, 452, 451, 258, 257, 246, 231, 229, 228, 227, 218, 212, 111, 107, 106, 97, 96, 17, 16, 11, 1355,
			1354, 1344, 1338, 1303, 1298, 1272, 1271, 1270, 1225, 1224, 1038, 993, 992, 989, 971, 968, 933, 932];
		for (var i = 1; ! category && i < p_channels.length; ++i)
			if (p_channels[ i ] == placeId)
				category = p_channels[ 0 ];
	}

	if (! category)
		return;

	var charset = document.characterSet ? document.characterSet : document.charset;
	(new Image(1, 1)).src = 'http://www.tns-counter.ru/V13a****otclick_ru/ru/' + charset + '/tmsec=' + category + '/' + Math.random();
}

(function(){
	if (typeof window._MT_TnsSent == 'undefined') {
		_MT_SendToTns();
		window._MT_TnsSent = 1;
	}
})();
