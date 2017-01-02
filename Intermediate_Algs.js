
//Drop It
function dropElements(arr, func) {
  // Drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

//Finders Keepers
function findElement(arr, func) {
  var filtered = arr.filter(func);
  return filtered[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });