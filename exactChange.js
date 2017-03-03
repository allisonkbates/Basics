
/*function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.

 var newArray = [["Penny", 0.01], ["Nickel", 0.05], ["Dime", 0.10], ["Quarter", 0.25]];

function number(x) {
  return typeof(x) === "number";
}
  
  return change;
}
*/

function checkCashRegister(price, cash, cid) {
  var changeNeeded;
  var drawer = 0.00;
  var change = 0.00;
  var denoms = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  // Here is your change, ma'am.
 
//evaluate total
  for (var i = 0; i < cid.length; i++) {
    drawer += cid[i][1];
  } drawer = drawer.toFixed(2);
//check if available funds are there  
  if (drawer < cash - price) {
    change = "Insufficient Funds";
  }
  if (drawer === cash - price) {
    change = "Closed";
  }
  if (drawer > cash - price) {
    changeNeeded = cash - price;
    for (var j = cid.length -1; i > -1; i--) {
      if (drawer[j][1] < changeNeeded && denoms[j][1]> 0) {
        var available = cid[j][i]/ denoms[j][1];
        
      }

      //change = Math.floor(drawer[j][1] / changeNeeded);
      } 
    }    
    }
  }
//check if the denomination is lower than amount owed
//check how much is available
//give what's available
//deduct from change needed & amount in register
//store array of change to give back
//do again

//handle your pennies!!!
//look up map reduce!!
//maybe create objects for denomination & value & coin



//check if available funds are divisible to give back


  // Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
  
  return change;
}



function checkCashRegister(price, cash, cid) {
  var changeNeeded = cash - price;
  var change = 0.00;

 /* var total = cid.reduce(function(acc, val){
    return acc + val;
  });*/

  return total;


}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);