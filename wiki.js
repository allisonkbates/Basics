window.onload = function () { 
  
  var search = document.querySelector(".search");

  function getUrl() {
    var input = document.getElementById("input").value;
    var apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=1&rnlimit=10&origin=*&format=json&srsearch=" + input;
    return apiURL;
  }

  function getData() {
    $.getJSON(getUrl(), function (data) {
        var queryArray = data.query.search;
        var titleArray = [];
        var snippetArray = [];
        
        console.log(queryArray);

        queryArray.map(function (query) {
          var results = document.getElementById('results');
          var h1 = document.createElement('h1');
          var headerText = document.createTextNode(query.title);
          h1.appendChild(headerText);
          results.appendChild(h1);
          
          var divSnippet = document.createElement('div');
          snippet = query.snippet;
          divSnippet.innerHTML = snippet;
          results.appendChild(divSnippet);
        });
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
