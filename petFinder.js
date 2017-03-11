
var apiKey = config.PET_API_KEY;
var apiURL = "http://api.petfinder.com/pet.getRandom?key=" + apiKey + "&format=json&output=basic&animal=dog&size=L&size=XL&callback=?";

jQuery(document).ready(function($) {
  $.getJSON(apiURL, function(data) {
  	console.log(data);
  	var dogName = data.petfinder.pet.name.$t;
  	var dogAge = data.petfinder.pet.age.$t;
  	var dogSex = data.petfinder.pet.sex.$t;
  	var dogBreed = data.petfinder.pet.breeds.breed.$t;
		var dogDescription = data.petfinder.pet.description.$t;
		var dogPhoto = data.petfinder.pet.media.photos.photo[2].$t;
  	document.getElementById("name").innerHTML = dogName;
  	document.getElementById("age").innerHTML = dogAge;
  	document.getElementById("sex").innerHTML = dogSex;
  	document.getElementById("breed").innerHTML = dogBreed;
  	document.getElementById("description").innerHTML = dogDescription;
  	document.getElementById("photo").src = dogPhoto;
  	console.log(dogPhoto);
  })
  	.done(function() {
  		console.log("second success");
  	})
  	.fail(function() {
  		console.log("error");
  	});
  });