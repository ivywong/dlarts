// source: https://jsfiddle.net/cferdinandi/qgpxvhhb/6/
// Show an element
var show = function (elem) {
	elem.classList.add('is-visible');
};

// Hide an element
var hide = function (elem) {
	elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function (elem) {
	elem.classList.toggle('is-visible');
};

// Listen for click events
document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	var parentlink = event.target.closest('a');
	if (!parentlink || !parentlink.classList.contains('toggle')) return;

	// Prevent default link behavior
	// event.preventDefault();

	// Toggle the content
	var toToggle = document.getElementsByClassName("toggle-content");
	for (var i = 0; i < toToggle.length; i++) {
		if ("#" + toToggle[i].id == parentlink.hash) {
			show(toToggle[i]);
		} else {
			hide(toToggle[i]);
		}
	}
}, true);
