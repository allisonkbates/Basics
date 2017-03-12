jQuery(document).ready(function($) {
	document.getElementById("search").addEventListener("click", function(){
		var input = document.getElementById("input").value;
		var apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=1&rnlimit=10&origin=*&format=json&srsearch=" + input;
		console.log(apiURL);
		$.getJSON(apiURL, function(data) {
  		console.log(data);
  		//titles
  		var title1 = data.query.search[0].title;
  		document.getElementById("title1").innerHTML = title1;
  			var title2 = data.query.search[1].title;
  		document.getElementById("title2").innerHTML = title2;
  			var title3 = data.query.search[2].title;
  		document.getElementById("title3").innerHTML = title3;
  			var title4 = data.query.search[3].title;
  		document.getElementById("title4").innerHTML = title4;
  			var title5 = data.query.search[4].title;
  		document.getElementById("title5").innerHTML = title5;
  			var title6 = data.query.search[5].title;
  		document.getElementById("title6").innerHTML = title6;
  			var title7 = data.query.search[6].title;
  		document.getElementById("title7").innerHTML = title7;
  			var title8 = data.query.search[7].title;
  		document.getElementById("title8").innerHTML = title8;
  			var title9 = data.query.search[8].title;
  		document.getElementById("title9").innerHTML = title9;
  			var title10 = data.query.search[9].title;
  		document.getElementById("title10").innerHTML = title10;
  		//snippets
  		var snippet1 = data.query.search[0].snippet;
  		document.getElementById("snippet1").innerHTML = snippet1 + "...";
  		var snippet2 = data.query.search[1].snippet;
  		document.getElementById("snippet2").innerHTML = snippet2 + "...";
  		var snippet3 = data.query.search[2].snippet;
  		document.getElementById("snippet3").innerHTML = snippet3 + "...";
  		var snippet4 = data.query.search[3].snippet;
  		document.getElementById("snippet4").innerHTML = snippet4 + "...";
  		var snippet5 = data.query.search[4].snippet;
  		document.getElementById("snippet5").innerHTML = snippet5 + "...";
  		var snippet6 = data.query.search[5].snippet;
  		document.getElementById("snippet6").innerHTML = snippet6 + "...";
  		var snippet7 = data.query.search[6].snippet;
  		document.getElementById("snippet7").innerHTML = snippet7 + "...";
  		var snippet8 = data.query.search[7].snippet;
  		document.getElementById("snippet8").innerHTML = snippet8 + "...";
  		var snippet9 = data.query.search[8].snippet;
  		document.getElementById("snippet9").innerHTML = snippet9 + "...";
  		var snippet10 = data.query.search[9].snippet;
  		document.getElementById("snippet10").innerHTML = snippet10 + "...";
  	})
  		.done(function() {
  			console.log("second success");
  		})
  		.fail(function() {
  			console.log("error");
  		})
		});
});