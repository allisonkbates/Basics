var apiKey = config.WEATHER_API_KEY;

function getLocation() {
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	apiURL = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/" + latitude + "," + longitude + ".json";
  
  $.ajax({
    url : apiURL,
    dataType : "jsonp",
    success : function(data) {
     showStuff(data);
     console.log(data);
    } 
  });
}

function showStuff(parsed) {
 //data needed
  var temp_f = Math.round(parsed.current_observation.temp_f) + "&deg F";
  var temp_c = Math.round(parsed.current_observation.temp_c) + "&deg C";
  var city = parsed.current_observation.display_location.city;
  var state = parsed.current_observation.display_location.state_name;
  var icon = parsed.current_observation.icon;
  
  //shows temperatures
  document.getElementById("temp_f").innerHTML = temp_f;
  document.getElementById("city").innerHTML = city;
  document.getElementById("state").innerHTML = state;
  //document.getElementById("icon").innerHTML = icon;
  
  //image rules
  if (icon == "partlycloudy") {
    document.getElementById("png").src = "assets/partlycloudy.png";
  } else if (icon === "sunny") {
    document.getElementById("png").src = "assets/sunny.png";
  } else if (icon === "clear") {
    document.getElementById("png").src = "assets/sunny.png";
  } else if (icon === "rainy") {
   document.getElementById("png").src = "assets/rainy.png";
  } else if (icon ==="cloudy") {
    document.getElementById("png").src = "assets/cloudy.png";
  } else {
    document.getElementById("png").src = "assets/cloudy.png";
  }
}

$(document).ready(function() {
  getLocation();
  });
