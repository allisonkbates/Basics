window.onload = function () { 
  
  const search = document.querySelector(".search");

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
          var results = document.getElementById('results'); //results
          var li = document.createElement('li');
          var textNode = document.createTextNode(query.title);
          li.appendChild(textNode);
          results.appendChild(li);
          var ul = document.createElement('ul');
          var li2 = document.createElement('div');
          var div2 = li2.write(query.snippet);
          results.appendChild(li2);
          /*
          var textNode2 = document.createTextNode(query.snippet.;
          li2.appendChild(textNode2);
          results.appendChild(li2);*/

        });

        /*queryArray.forEach(function (query) {
          titleArray.push(query.title);
          snippetArray.push(query.snippet);
        });

        titleArray.forEach(function (title) {
          var results = document.getElementById('results'); //results
          var li = document.createElement('li');
          var textNode = document.createTextNode(title);
          li.appendChild(textNode);
          results.appendChild(li);



        });
         snippetArray.forEach(function (snippet) {
          var ul = document.createElement('ul');
          results.appendChild(ul);
          var li2 = document.createElement('li');
          var snippetNode = document.createTextNode(snippet);
          li2.appendChild(snippetNode);
          
          ul.appendChild(li2);
        });   */ 

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

  function showResults() {

  }

  search.addEventListener("submit", searchWiki);
}

//figure out how to get fa-search into the html via js??
