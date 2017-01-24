/* User Stories
User Story: I can see the weather in my current location. (use past work for getting current location)
User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather. (create rules for showing weather degrees and/or conditions)
User Story: I can push a button to toggle between Fahrenheit and Celsius. (use event listeners/toggle classes: https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)

*/

//"http://api.wunderground.com/api/ccd41eba2fc9c992/conditions/q/37.776289,-122.395234.json"
//lat&long should be added based on location, then it should be retrieved from the api

//follow instruction for getLocation from W3 SCHOOLS
//lat & long should be added into url variable
//get request for weather
//background image based on data
//toggle for both fahrenheit and celsius



function getLocation() {
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	apiURL = "http://api.wunderground.com/api/ccd41eba2fc9c992/conditions/q/" + latitude + "," + longitude + ".json";
	jQuery(document).ready(function($) {
  $.ajax({
  url : apiURL,
  dataType : "json",
  success : function(parsed_json) {
  parsed_json = JSON.stringify(parsed_json);
  document.getElementById("demo").innerHTML = parsed_json;
  }
  });
});
}


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
	apiURL = "http://api.wunderground.com/api/ccd41eba2fc9c992/conditions/q/" + latitude + "," + longitude + ".json";
	console.log(apiURL);
}

showPosition(getLocation);

function getData() {
 	jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/ccd41eba2fc9c992/geolookup/conditions/q/IA/Cedar_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});
}*/

