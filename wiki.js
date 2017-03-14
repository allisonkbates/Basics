window.onload = function () { 
  
  const search = document.querySelector(".search");

  function getUrl() {
    var input = document.getElementById("input").value;
    var apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=1&rnlimit=10&origin=*&format=json&srsearch=" + input;
    return apiURL;
  }

  function getData() {
    $.getJSON(getUrl(), function(data) {
        console.table(data.query.search);
        var title = data.query.search[0].title;
        document.getElementById("title").innerHTML = title;
    })
      .done(function() {
        console.log("data loaded successfully!");
      })
      .fail(function() {
        console.log("error");
      })
  }

  function searchWiki(e) {
    e.preventDefault();
    getData();
  }

  search.addEventListener("submit", searchWiki);


}