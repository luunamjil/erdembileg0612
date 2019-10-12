

var numLines;

window.onload = function(){

	numLines = Math.floor((document.getElementById("screen").offsetHeight - 30) / 6);

	for (var i = 0; i < numLines - 1; i++) {
		

		var newLine = document.createElement("DIV");

		newLine.className = "line";

		document.getElementById("screen").appendChild(newLine);

	}

}

function infoBoxHover(hovered) {
	var popup = document.getElementById("popup")

	if (hovered) {
		popup.style.display = "block";
	} 

	else if (!hovered) {
		popup.style.display = "none"
	}
}