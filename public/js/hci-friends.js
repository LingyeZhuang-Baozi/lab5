'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	/* 4a. Listen to clicks on the friend's name */
	$(".nameOfFriend").click(nameClick);  // names are wrapped in <a> elements

	/*Bonus. Listen to clicks on fake friend */
	$(".fakeFriend").click(removeFake);
}

/* 4b. Replace the name with an anagram */
function nameClick(e) {
	// debug message
	console.log("Friend's name clicked");
	// prevent reloading
	e.preventDefault();
	// retrieve current name
	var currentName = $(this).text();
	// find anagrammed version
	var anagramName = anagrammedName(currentName);
	// replace name with anagram
	$(this).text(anagramName);
}

/* Bonus. remove fake friend */
function removeFake(e) {
	// debug message
	console.log("Fake friend removed");
	// prevent reloading
	e.preventDefault();
	// get fake friend div
	var containingFakeFriend = $(this).closest(".friend");
	// remove the fake friend div
	$(containingFakeFriend).fadeOut();
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}