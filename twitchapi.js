$(document).ready(function() {

var search = document.querySelector(".search");
var urlBase = "https://wind-bow.gomix.me/twitch-api/streams/" + userName + "?callback=?";

var placeholder1 = "https://wind-bow.gomix.me/twitch-api/streams/brunofin?callback=?";
var placeholder2 = "https://wind-bow.gomix.me/twitch-api/streams/comster404?callback=?";

var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


function getUrl() {

}




function getData() {
  $.getJSON(getUrl(), function (data) {
  		if (data.stream === null) {
  		console.log("offline");
  	} else {
  		console.log("online");
  	}
  })
  .done(function() {
    console.log("data loaded successfully!");
  })
  .fail(function() {
    console.log("error");
  })
}

 function getInfo(e) {
    e.preventDefault();
  	getData();
  }

  search.addEventListener("submit", getInfo);

});