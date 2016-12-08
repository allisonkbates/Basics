function uniteUnique(arr) {
var arr1=Array.prototype.slice.call(arguments);
var arr2=arr1.reduce(function(a, b) {
  return a.concat(b);
}, []);
  var finalArray=arr2.filter(function(item, pos, self) {
    return self.indexOf(item) === pos;
  }); 
 return finalArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);