function convertToRoman(num) {
//calculating how many are needed of each numeral & remainders  
var thousands = Math.floor(num/1000);
var nineHundreds = num%1000;
num = num - (1000*thousands);
var fiveHundreds = Math.floor(num/500);
var fourHundreds = num%500;
num = num - (500*fiveHundreds);
var hundreds = Math.floor(num/100);
var nineties = num%100;
num = num - (100*hundreds);
var fifties = Math.floor(num/50);
var fourties = num%50;
num = num - (50*fifties);
var tens = Math.floor(num/10);
var nines = num%10;
num = num - (10*tens);
var fives = Math.floor(num/5);
var fours = num%5;
num = num - (5*fives);
var ones = Math.floor(num/1);

//all the exception numerals
var romanNines; 
var romanFours;
var romanFourties;
var romanNineties;
var romanFourHundreds;
var romanNineHundreds;

//assigning the numeral the correct number of times
var romanThousands = Array(thousands+1).join("M");
if (nineHundreds >= 900) {
  romanNineHundreds = Array(2).join("CM");
  fiveHundreds =0;
  fourHundreds=0;
  hundreds=0;
}
var romanFiveHundreds = Array(fiveHundreds+1).join("D");
if (fourHundreds >= 400) {
  romanFourHundreds = Array(2).join("CD");
  hundreds=0;
}
var romanHundreds = Array(hundreds+1).join("C");
if (nineties >=90) {
    romanNineties = Array(2).join("XC");
    fifties=0;
    fourties=0;
    tens=0;
    }
var romanFifties = Array(fifties+1).join("L");
if (fourties >=40) {
  romanFourties = Array(2).join("XL");
  tens=0;
}
var romanTens = Array(tens+1).join("X");
if (nines === 9) {
  romanNines = Array(2).join("IX");
  ones = 0;
  fours=0;
  fives = 0;
}
var romanFives = Array(fives+1).join("V");
if (fours === 4) {
  romanFours = Array(2).join("IV");
  ones = 0;
}
var romanOnes = Array(ones+1).join("I"); 


//creating the return array
var numerals = [];
numerals.push(romanThousands, romanNineHundreds, romanFiveHundreds, romanFourHundreds, romanHundreds, romanNineties, romanFifties, romanFourties, romanTens, romanNines, romanFives, romanFours, romanOnes);
  return numerals.join("");
}

convertToRoman(3999);
