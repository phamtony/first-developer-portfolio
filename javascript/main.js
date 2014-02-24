var menu = document.getElementById('mainNav').getElementsByTagName('a');

var current = window.location.pathname.split('/')[9];
for (var i = 0; i < menu.length; i++) {
	if (menu[i].href == current) {
		menu[i].className = "active;"
	}
}