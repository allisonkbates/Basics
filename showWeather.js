/* User Stories
User Story: I can see the weather in my current location. (use past work for getting current location)
User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather. (create rules for showing weather degrees and/or conditions)
User Story: I can push a button to toggle between Fahrenheit and Celsius. (use event listeners/toggle classes: https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)

*/

//"http://api.wunderground.com/api/apikey/conditions/q/37.776289,-122.395234.json"
//lat&long should be added based on location, then it should be retrieved from the api

//follow instruction for getLocation from W3 SCHOOLS
//lat & long should be added into url variable
//get request for weather
//background image based on data
var apiKey = config.API_KEY;

function getLocation() {
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	apiURL = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/" + latitude + "," + longitude + ".json";
	jQuery(document).ready(function($) {
  $.ajax({
  url : apiURL,
  dataType : "json",
  success : function(parsed_json) {
  
  //data needed
  var temp_f = Math.round(parsed_json.current_observation.temp_f) + "&deg F";
  var temp_c = Math.round(parsed_json.current_observation.temp_c) + "&deg C";
  var city = parsed_json.current_observation.display_location.city;
  var state = parsed_json.current_observation.display_location.state;
  var icon = parsed_json.current_observation.icon;
  
  //showing all data
  var weatherData = parsed_json;
  console.log(weatherData);
 
  //shows temperatures
  document.getElementById("temp_f").innerHTML = temp_f;
  document.getElementById("city").innerHTML = city + ", " + state;
  document.getElementById("icon").innerHTML = icon;
  
  //image rules
  if (icon == "partlycloudy") {
    document.getElementById("png").src = "partlycloudy.png";
  } else if (icon === "sunny") {
    document.getElementById("png").src = "sunny.png";
  } else if (icon === "rainy") {
   document.getElementById("png").src = "rainy.png";
  } else if (icon ==="cloudy") {
    document.getElementById("png").src = "cloudy.png";
  } else {
    console.log("you suck");
  }

  }
  });
});
}




//changing a few other things

/*var apiURL;
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}
function showPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	apiURL = "http://api.wunderground.com/api/apikey/conditions/q/" + latitude + "," + longitude + ".json";
	console.log(apiURL);
}

showPosition(getLocation);

function getData() {
 	jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/apikey/geolookup/conditions/q/IA/Cedar_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});
}*/

