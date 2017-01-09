function smallestCommons(arr) {

//first for loop, goes through each multiple of the greatest number
//second for loop, checks if the multiple of the greatest number is compatible with remaining lower numbers

var max = Math.max(arr[0], arr[1]);
var maxminus = max-1;

for (var i = max; ;i+max) {
  for (var j=maxminus; j>0; j--) {
  if (i%j===0) {
    num = i;
  }
  }
     
}  return num;
  
}  
smallestCommons([1,5]);
