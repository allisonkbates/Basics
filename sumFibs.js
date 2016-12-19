function sumFibs(num) {
var total =1;
var fib = [1];

function oddNumbers(value) {
return value%2 === 1;
}

while (num >= total){
fib.push(total);
total = fib[fib.length-1] + fib[fib.length-2];
}

var odd = fib.filter(oddNumbers);

var final =0;
for (var i=0; i<odd.length; i++){
final += odd[i];
}
return final;
}

sumFibs(1000);