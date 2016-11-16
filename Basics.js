$(document).ready(function(){
  
  $("#reverse").click(function() {
    var string = document.getElementById("alg-1-input").value.split("").reverse().join("");
    //alert(string);
    document.getElementById("alg-1-output").innerHTML=string;
    });

  $("#factorialize").click(function() {
    var factorial = 1;
    var num = $("#alg-2-input").val();
   for (var i = 1; i <= num; i ++){
      factorial = factorial *i;
    }
    $("#alg-2-output").append(factorial);
  });

  $("#palindrome").click(function() {
    var str = ($("#alg-3-input")).val();
    var initial = str.toLowerCase().replace(/\W|_/g, '');
    if (initial.split('').reverse().join('') === initial) {
      $("#alg-3-output").append("true");
    } else {
       $("#alg-3-output").append("false");
    }
  });

});