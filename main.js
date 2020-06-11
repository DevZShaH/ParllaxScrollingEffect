const bg = document.getElementById('bg');
const moon = document.getElementById('moon');
const road = document.getElementById('road');
const mountain = document.getElementById('mountain');
const welcomeText = document.getElementById('welcome-text');

window.addEventListener('scroll', function() {
	var value = this.window.scrollY;

	bg.style.top = value * 0.5 + 'px';
	moon.style.top = -value * 0.5 + 'px';
	mountain.style.top = -value * 0.15 + 'px';
	road.style.top = value * 0.15 + 'px';
	welcomeText.style.top = value * 1 + 'px';
});

/*============================ INDEX2.HTML ================================================================================= */

// $('section').mousemove(function(e) {
// 	var moveX = e.pageX * -1 / 15;
// 	var moveY = e.pageY * -1 / 15;
// 	$(this).css('background-position', moveX + 'px ' + moveY + 'px');
// });
