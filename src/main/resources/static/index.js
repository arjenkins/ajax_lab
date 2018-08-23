//var data = [];
var request = new XMLHttpRequest();
request
		.open("GET",
				"https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json");
var swapiContainer = document.getElementById("ppl");

request.onload = function() {

	console.log(request.responseText);
	var data = JSON.parse(request.responseText);
	renderHTML(data);
	console.log(data.complete);
	console.log(data.tiny);

};

request.send();

function renderHTML(data) {
	for (var i = 0; i < data.complete.length; i++) {
		var htmlString = "<p>" + "{ Name: " + data.complete[i].firstName + " " + data.complete[i].lastName + "</p>"
				+ "<p>" + "Innovation: " + data.complete[i].innovation + "</p>"
				+ " " + "Year: " + data.complete[i].year + " }" + "</p>";
		swapiContainer.insertAdjacentHTML("beforeend", htmlString);
	}
}