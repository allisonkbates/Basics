$(document).ready(function(){
	$("#button").click(function() {
		$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function (data) {
			var author = data.author;
			var quote = data.quote;
			document.getElementById("quote").innerHTML = quote;
			document.getElementById("author").innerHTML = author;
		});
	});
});