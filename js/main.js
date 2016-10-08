function sistema() {
	if (navigator.userAgent.indexOf('Linux') != -1) {
		var so = "Linux";
		document.getElementById('windows_header').style.display = 'none';
	} else if ((navigator.userAgent.indexOf('Win') != -1) && (navigator.userAgent.indexOf('95') != -1)) {
		var so = "Windows 95";
		document.getElementById('macintosh_header').style.display = 'none';
	} else if ((navigator.userAgent.indexOf('Win') != -1) && (navigator.userAgent.indexOf('98') != -1)) {
		var so = "Windows 98";
		document.getElementById('macintosh_header').style.display = 'none';
	} else if ((navigator.userAgent.indexOf('Win') != -1) && (navigator.userAgent.indexOf('NT') != -1)) {
		var so = "Windows NT";
		document.getElementById('macintosh_header').style.display = 'none';
	} else if ((navigator.userAgent.indexOf('Win') != -1) && (navigator.userAgent.indexOf('2000') != -1)) {
		var so = "Windows 2000";
		document.getElementById('macintosh_header').style.display = 'none';
	} else if (navigator.userAgent.indexOf('Mac') != -1) {
		var so = "Macintosh";
		document.getElementById('windows_header').style.display = 'none';
	} else if (navigator.userAgent.toLowerCase().indexOf('unix') != -1) {
		var so = "Unix";
		document.getElementById('macintosh_header').style.display = 'none';
	} else {
		var so = "Outro";
		document.getElementById('macintosh_header').style.display = 'none';
	}
}