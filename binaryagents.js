
function binaryAgent(str) {
var array = str.split(" ");
var words = [];
var moreWords;
for (var j=0; j<array.length; j++){
  var attempt = array[j];
  var k=0;
  var decimal =0;
    for (var i=7; i>=0; i--) {
       var dec = attempt[k] * Math.pow(2, i);
       decimal += dec;
       k++;
    }
  words.push(decimal);
  moreWords = String.fromCharCode.apply(null, words);
}
return moreWords;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");