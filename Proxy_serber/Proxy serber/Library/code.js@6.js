window._ons = {}

window._mt_ot_adv = (window._mt_ot_adv||{})
window._mt_ot_adv[ 587 ] = {
	'stub':'',
	'channel_height':'400',
	'channel_width':'240',
	'tmpl_run':'_MT_OtclickBannerStubRun'
}

function _MT_OtclickRun(placeId)
{
	if (typeof placeId == 'undefined')
		return;

	(function(){
		if (typeof window._MT_TnsSent != 'undefined')
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
		(new Image(1, 1)).src = 'http://www.tns-counter.ru/V13a****otclick_ru/ru/' + charset + '/tmsec=' + category + '/' + _mt_rnd;

		window._MT_TnsSent = 1;
	})();

	if (typeof _mt_ot_props[ placeId ] == 'undefined')
		return;
	if (typeof _mt_ot_adv[ placeId ] == 'undefined')
		return;

	var ad = _mt_ot_adv[ placeId ]

	var ad_empty = true
	for(var prop in ad) {
		if(ad.hasOwnProperty(prop)) {
			ad_empty = false;
			break;
		}
	}
	if (ad_empty)
		return;

	var container = document.getElementById('_mt_ot_container_' + placeId)
	if (! container)
		return;

	eval(ad.tmpl_run)(placeId, ad, container)
}

function _MT_OtclickBannerStubRun(placeId, ad, ct)
{
	if (typeof ad.stub == 'undefined' || ad.stub == '')
		return;

	ct.style.margin = '0'
	ct.style.padding = '0'
	ct.style.marginLeft = 'auto'
	ct.style.marginRight = 'auto'

	var f = document.createElement('iframe')
	ct.appendChild(f)

	f.frameBorder = '0'
	f.scrolling = 'no'
	f.horizontalscrolling = 'no'
	f.verticalscrolling = 'no'

	f.height = ad.channel_height
	f.width = ad.channel_width
	f.marginHeight = '0'
	f.marginWidth = '0'
	f.padding = '0'
	f.marginLeft = 'auto'
	f.marginRight = 'auto'

	f.contentWindow.document.open()
	f.contentWindow.document.write('<html><head><title>Advertisement</title></head><body style="margin:0; padding:0; overflow:hidden;">')
	f.contentWindow.document.write(ad.stub)
	f.contentWindow.document.write('</body></html>')
	f.contentWindow.document.close()
}
