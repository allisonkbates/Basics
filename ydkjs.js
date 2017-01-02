const taxRate = 0.08; 
const phonePrice = 99.99;
const accessoryPrice = 9.99;
const spendingThreshold = 200;

var bankBalance = prompt();
var amount = 0;

function calculateTax(amount) {
	return amount * taxRate;
}
function formatAmount(amount) {
	return "$" + amount.toFixed(2);
}

while (amount < bankBalance) {
	amount = amount + phonePrice;
	if (amount < spendingThreshold) {
		amount = amount + accessoryPrice;
	}
}
amount = amount + calculateTax(amount);
console.log("Your Purchase: " + formatAmount(amount));

if (amount > bankBalance) {
	console.log("You can't afford this purchase. :(");
}
