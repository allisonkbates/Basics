



function getData() {
  $.getJSON(getUrl(), function (data) {
   console.log(data);
  })
  .done(function() {
    console.log("data loaded successfully!");
  })
  .fail(function() {
    console.log("error");
  })
}