function getJSON(url) {
	return fetch(url)
		.then(function (response) {
		return response.json();
	})
		.catch(function (error) {
		console.log(error);
	});
}

function fetchShips() {
	var url = "//swapi.co/api/starships/";

	getJSON(url).then(function (data) {
		console.log(data);
	var results = data.results;

	var shipListElement = document.getElementById('shiplist');

	shipListElement.innerHTML = "";

	results.forEach(function(ship) {
		console.log(ship)
			var listItem = document.createElement('li');
			var link = document.createElement('a');
			link.setAttribute('href', ship.url);
		link.addEventListener('click', function(event){
			event.preventDefault();
			getShipDetails(ship.url);
		});
			link.innerHTML = ship.name;
			listItem.appendChild(link);
		shipListElement.appendChild(listItem);

	});
	}
}

data.results[0].name

function getShipDetails(url) {
		getJSON(url).then(function (data) {
			console.log(data);
		});
	}


fetchShips();

