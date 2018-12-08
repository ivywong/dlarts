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

var hideAllButTarget = function (event) {

	// Make sure clicked element is our toggle
	var parentlink = event.target.closest('a');
	if (!parentlink || !parentlink.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Toggle the content
	var toToggleOriginal = document.querySelector("#site-original").getElementsByClassName('toggle-content');
	var toToggleMachine = document.querySelector("#site-machine").getElementsByClassName('toggle-content');

	for (var i = 0; i < toToggleOriginal.length; i++) {
		if ("#" + toToggleOriginal[i].id == parentlink.hash) {
			show(toToggleOriginal[i]);
		} else {
			hide(toToggleOriginal[i]);
		}
	}

	for (var i = 0; i < toToggleMachine.length; i++) {
		if ("#" + toToggleMachine[i].id == parentlink.hash) {
			show(toToggleMachine[i]);
		} else {
			hide(toToggleMachine[i]);
		}
	}
};

// TODO: modify buttons as well
var showOriginal = function() {
	hide(document.querySelector("#site-machine"));
	show(document.querySelector("#site-original"));
}

var machineTranslate = function() {
	hide(document.querySelector("#site-original"));
	show(document.querySelector("#site-machine"));
}

window.onload=function(){
	// Listen for click events
	document.querySelector("#site-original").addEventListener('click', hideAllButTarget, false);
	document.querySelector("#site-machine").addEventListener('click', hideAllButTarget, false);

	document.querySelector("#show-original").addEventListener('click', showOriginal, false);
	document.querySelector("#machine-translation").addEventListener('click', machineTranslate, false);
}
