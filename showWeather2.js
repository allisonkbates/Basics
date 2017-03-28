var apiKey = config.WEATHER_API_KEY;

function getLocation() {
	navigator.geolocation.getCurrentPosition(returnPosition);
}

function returnPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
}

function getURL(latitude, longitude) {
	var apiURL = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/" + latitude + "," + longitude + ".json";
	console.log(apiURL);
	return apiURL;
}


//	apiURL = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/" + latitude + "," + longitude + ".json";
$(document).ready(function(){
	getLocation();
});