$(document).ready (function() {
  var search = document.querySelector(".search");

  function getUrl() {
    var input = document.getElementById("input").value;
    var apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=1&rnlimit=10&origin=*&format=json&srsearch=" + input;
    return apiURL;
  }

  function getData() {
    $.getJSON(getUrl(), function (data) {
        var queryArray = data.query.search;
        return queryArray;
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
    while (results.hasChildNodes()) {
      results.removeChild(results.lastChild);
    }
    getData();
  }

  function showResults() {
    
  }

  search.addEventListener("submit", searchWiki);
});