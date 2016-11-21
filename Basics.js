function reverseString(){
  var string = (document.getElementById("alg-1-input")).value.split("").reverse().join("");
  document.getElementById("alg-1-output").innerHTML = string;
  }
function factorialize() {
  var factorial = 1;
  var num = document.getElementById("alg-2-input").value;
 for (var i = 1; i <= num; i ++){
    factorial = factorial *i;
  }
  document.getElementById("alg-2-output").innerHTML = factorial;
}
function palindrome() {
  var str = (document.getElementById("alg-3-input")).value;
  var initial = str.toLowerCase().replace(/\W|_/g, '');
  if (initial.split('').reverse().join('') === initial) {
    document.getElementById("alg-3-output").innerHTML = "true";
  } else {
     document.getElementById("alg-3-output").innerHTML = "false";
}
}