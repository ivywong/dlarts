var manualData = {
	"translating": false,
	"prompted": false,
	"intervalID": null,
}

var manualProgress = {
	"meta_translated": false,
	"kowigae": {
		"title_original": "kumawet kukowigae",
		"title_manual": "kitty's journal",
		"title_translated": false,
		"last_entry": -1,
		"last_p": -1,
		"complete": false,
	},
	"luy": {
		"title_original": "kumawet kuluy",
		"title_manual": "kitty's pictures",
		"title_translated": false,
		"last_entry": -1,
		"last_p": -1,
		"complete": false,
	},
	"kuwod": {
		"title_original": "kumawet kukuwod",
		"title_manual": "kitty's den",
		"title_translated": false,
		"last_entry": -1,
		"last_p": -1,
		"complete": false,
	},
	"fam": {
		"title_original": "kumawet kufam",
		"title_manual": "kitty's poems",
		"title_translated": false,
		"last_entry": -1,
		"last_p": -1,
		"complete": false,
	},
	"liy": {
		"title_original": "kumawet kuliy",
		"title_manual": "kitty's stories",
		"title_translated": false,
		"last_entry": -1,
		"last_p": -1,
		"complete": false,
	}
}

var translationData = {};

var loadTranslationData = function() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			translationData = JSON.parse(this.responseText);
		}
	};
	xmlhttp.open("GET", "data/translation.json", true);
	xmlhttp.send();
}

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
	var toToggleManual = document.querySelector("#site-manual").getElementsByClassName('toggle-content');

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

	for (var i = 0; i < toToggleManual.length; i++) {
		if ("#" + toToggleManual[i].id == parentlink.hash) {
			show(toToggleManual[i]);
		} else {
			hide(toToggleManual[i]);
		}
	}
};

// TODO: modify buttons as well
var showOriginal = function(event) {
	if (manualData["translating"]) {
		var cont = confirm("Switching now will cancel your translation!");
		if (!cont) return;
	}
	hide(document.querySelector("#site-machine"));
	hide(document.querySelector("#site-manual"));
	show(document.querySelector("#site-original"));
	document.querySelector("#show-manual").innerHTML = "Manual Translation";
	removeLoader(false);
}

var machineTranslate = function(event) {
	if (manualData["translating"]) {
		var cont = confirm("Switching now will cancel your translation!");
		if (!cont) return;
	}
	hide(document.querySelector("#site-original"));
	hide(document.querySelector("#site-manual"));
	show(document.querySelector("#site-machine"));
	document.querySelector("#show-manual").innerHTML = "Manual Translation";
	removeLoader(false);
}

var manualTranslate = function(event) {
	var button = document.querySelector("#show-manual");
	if (!document.querySelector("#site-manual").classList.contains("is-visible")) {
		hide(document.querySelector("#site-original"));
		hide(document.querySelector("#site-machine"));
		show(document.querySelector("#site-manual"));
		button.innerHTML = "Manually Translate...";
	} else {
		var loader = document.querySelector("#manual-loader");
		if (loader) return;

		var manual = document.querySelector("#site-manual");
		var currentPage = manual.querySelector(".is-visible");

		// exit if everything on the current page has been translated
		if ((manualProgress["meta_translated"] && currentPage.id == "frontpage") || (currentPage.id != "frontpage" && manualProgress[currentPage.id]["complete"])) return;

		var actions = ["Check Dictionary", "Look Up Reference", "Consult Native Speaker"];
		var randaction = actions[Math.floor(Math.random() * actions.length)];
		var secs = Math.floor(10 + Math.random() * 10);
		var innerText = `
			<div id="manual-content">${randaction}</div>
			<div id="manual-loader">${secs}</div>
		`
		// change button to have a random action
		button.innerHTML = innerText;
		manualData["translating"] = true;
		manualData["intervalID"] = setInterval(updateLoader, 1000);
		// DEBUG
		setTimeout(removeLoader, secs*1000, true);
		// setTimeout(removeLoader, 1000, true);
	}
}

var updateLoader = function() {
	var button = document.querySelector("#show-manual");
	var loader = document.querySelector("#manual-loader");
	var timeLeft = parseInt(loader.innerHTML) - 1;
	if (timeLeft >= 0) {
		loader.innerHTML = timeLeft;
	}
}

var removeLoader = function(naturalTimeout) {
	if (manualData["translating"]) {
		clearInterval(manualData["intervalID"]);
		manualData["translating"] = false;
		var button = document.querySelector("#show-manual");
		if (naturalTimeout) {
			button.innerHTML = "Manually Translate...";
			updateManualTranslation();
		}
	}
}

var updateManualTranslation = function(){
	var manual = document.querySelector("#site-manual");
	if (!manualProgress["meta_translated"]) {
		// replace header with translation
		manual.querySelector("#header-original").outerHTML = `
			<div id="header-manual">
				<h1 id="site-title">kitty's den</h1>
				<ul id="nav">
					<li id="nav-label"> other dens </li>
					<li>
						<b id="nav-yom">family | </b>
						<a href="#">red lion</a>
					</li>
					<li>
						<b id="nav-yan">good friends | </b>
						<a href="#">waterfall</a>
						<a href="#">Patur, Patur</a>
					</li>
					<li>
						<b id="nav-yir">poor friends | </b>
						<a href="#">today is good</a>
					</li>
				</ul>
			</div>
		`
		// translate back buttons
		var backs = manual.querySelectorAll(".toggle");
		for (var i = 0; i < backs.length; i++) {
			if (backs[i].hash == "#frontpage") {
				backs[i].innerText = "← back";
			}
		}
		manualProgress["meta_translated"] = true;
		return;
	}

	var currentPage = manual.querySelector(".is-visible");
	var entries = currentPage.getElementsByClassName("entry");
	// translate page titles
	if (currentPage.id != "frontpage") {
		var currentData = manualProgress[currentPage.id];
		if (!currentData["title_translated"]) {
			var title = currentPage.querySelector("#" + currentPage.id + "-title");
			title.innerHTML = manualProgress[currentPage.id]["title_manual"];
			currentData["title_translated"] = true;
		} else if (currentData["last_entry"] == -1) {
			// translate first entry
			translateParagraph(currentPage, entries, 0, 0);
		} else {
			var paras = entries[currentData["last_entry"]].querySelectorAll("p");
			var p_done = currentData["last_p"] == paras.length - 1;
			var e_done = currentData["last_entry"] == entries.length - 1;
			
			// translate following paragraphs and entries
			if (!p_done) {
				translateParagraph(currentPage, entries, currentData["last_entry"], currentData["last_p"] + 1);
			} else if (!e_done) {
				translateParagraph(currentPage, entries, currentData["last_entry"], 0);
			}
		}
	}
}

var translateParagraph = function(currentPage, entries, eIdx, pIdx) {
	console.log(eIdx, pIdx);
	var currentData = manualProgress[currentPage.id];
	var currentEntry = entries[eIdx];
	var entryData = translationData[currentEntry.id];
	currentData["last_entry"] = eIdx;
	var paras = currentEntry.querySelectorAll("p");

	if (pIdx == 0) {
		currentEntry.querySelector("h3").innerHTML = entryData["title_manual"];
	}

	paras[pIdx].innerHTML = entryData["content_manual"][pIdx];
	currentData["last_p"] = pIdx;

	if (eIdx == entries.length - 1 && pIdx == paras.length - 1) {
		currentData["complete"] = true;
	}
}

var generateManualContent = function() {
	var original = document.querySelector("#site-original");
	var manual = document.querySelector("#site-manual");
	manual.innerHTML = original.innerHTML;
	var entries = manual.getElementsByClassName("entry");
	for (var i = 0; i < entries.length; i++) {
		var title = entries[i].querySelector("h3");
		var paragraphs = entries[i].querySelectorAll("p");
		title.setAttribute("id", entries[i].id + "_title");
		for (var j = 0; j < paragraphs.length; j++) {
			paragraphs[j].setAttribute("id", entries[i].id + "_p" + j);
		}
	}	
}

var switchPages = function(event) {
	if (manualData["translating"]) {
		var conf = confirm("Leaving this page now will stop your translation!");
		if (!conf) {
			return;
		} else {
			var button = document.querySelector("#show-manual");
			removeLoader(false);
			button.innerHTML = "Manually Translate...";
		}
	}
	hideAllButTarget(event);
}

window.onload=function(){
	loadTranslationData();
	generateManualContent();

	// Listen for click events
	document.querySelector("#site-original").addEventListener('click', switchPages, false);
	document.querySelector("#site-machine").addEventListener('click', switchPages, false);
	document.querySelector("#site-manual").addEventListener('click', switchPages, false);

	document.querySelector("#show-original").addEventListener('click', showOriginal, false);
	document.querySelector("#machine-translation").addEventListener('click', machineTranslate, false);
	document.querySelector("#show-manual").addEventListener('click', manualTranslate, false);
}
