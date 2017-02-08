//Basics Portfolio
//This will include the JS for all the algorithm challenges.
//Functions & DOM will be separate for clarity
//Functions will also be separated by input (for example all strings manipulations will be together)
//missing convert HTML entities

//string manipulations
function reverseString(str) {
    return str.split("").reverse().join("");
}

function palindrome(str) {
    var initial = str.toLowerCase().replace(/\W|_/g, '');
    if (initial.split('').reverse().join('') === initial) {
        return true;
    } else {
        return false;
    }
}

function findLongestWord(str) {
    var splits = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < splits.length; i++) {
        if (longest < splits[i].length){ 
            longest = splits[i].length;
            word = splits[i];
        }
    }
    return word.length;
}

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}

function rot13(str) { 
    var newString = "";
    var newString2 = "";
    var arrayCodes = [];  
    var arrayLetters = [];
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 'Z'.charCodeAt(0) || str.charCodeAt(i) < 'A'.charCodeAt(0)) {
            newString = str.charCodeAt(i);      
            arrayCodes.push(newString); 
        } else {
            if (str.charCodeAt(i) + 13 > 'Z'.charCodeAt(0)) {
                newString = str.charCodeAt(i) - 13;
                arrayCodes.push(newString);
            } else {
                newString = str.charCodeAt(i) + 13;
                arrayCodes.push(newString);
            }
        }
    } 
    for (i = 0; i < arrayCodes.length; i++) {
        if (arrayCodes[i] > 'Z'.charCodeAt(0) || arrayCodes[i] < 'A'.charCodeAt(0)) {
            newString2 = String.fromCharCode(arrayCodes[i]);      
            arrayLetters.push(newString2); 
        } else {
            if (arrayCodes[i] > 'Z'.charCodeAt(0)) {
                newString2 = String.fromCharCode(arrayCodes[i]);
                arrayLetters.push(newString2);
            } else {
                newString2 = String.fromCharCode(arrayCodes[i]);
                arrayLetters.push(newString2);
            }
        }
    } return arrayLetters.join("");
}

function pairElement(str) {
    var swap = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    };
    var pairs = str.split("");
    var maps = pairs.map(function(s){
        return [s,swap[s]];
    });
    return maps;
}


function translatePigLatin(str) {  
    var vowel;
    for (var i=0; i<str.length; i++) {
        if (str.indexOf("a") === 0 || str.indexOf("e") === 0 || str.indexOf("i") === 0 ||         str.indexOf("o") === 0 || str.indexOf("u") === 0) {
            return str + "way";
        }      
        if (str.charAt(i) === "a" || str.charAt(i) ==="e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") {
            vowel = i;
            var firstHalf = str.substr(vowel);
            var secondHalf = str.substr(0, vowel) + "ay";
            return firstHalf + secondHalf;
        }
    }
}

function fearNotLetter(str) { 
    for (var i=0; i<str.length; i++){
        if ((str.charCodeAt(i) - str.charCodeAt((i-1))) > 1) {
            var missing = str.charCodeAt(i) -1;
            return String.fromCharCode(missing);
        }
    }
}

function binaryAgent(str) {
    var binaries = str.split(" ").map(function(x){
        return parseInt(x,2);
    });
    var output = String.fromCharCode.apply(null, binaries);
        return output;
}

function spinalCase(str) {
    var re2 = /([a-z])([A-Z])|-|_| /g;
    str = str.replace(re2, '$1-$2').toLowerCase();
    return str;
}

function telephoneCheck(str) {
    var newerStr;
    var newestStr;
    var parpattern = new RegExp (/\([0-9][0-9][0-9]\)/g);
    var regex = new RegExp (/\(|\)/g);
    var regexpat = new RegExp (/-| /g);
    if (str[0] === "-") {
      return false;
    }
    var newStr = str.replace(regexpat, "");
    if (newStr[0] === "1" && str.length > 10) {
        newerStr = newStr.substr(1, str.length);
    } else {
      newerStr = newStr;
    }
    if (parpattern.test(newerStr) && newerStr.length === 12) {
      return true;
    } if (regex.test(newerStr)) { 
      return false;
    } else {
      newestStr = newerStr;
    }
    if (newestStr.length === 10) {
      return true;
    } else {
      return false;
    }
}

//two strings
function confirmEnding(str, str2) {  
    var str2Length = str2.length;
    str = str.substr(-str2Length);
    if (str === str2) {
        return true;
    }
    else {
        return false;
    }
}

//three strings
function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() +after.slice(1); 
    }
    var index1 = str.search(before);
    str = str.replace(before, after);
    return str;
}

//one string, one number
function repeatStringNumTimes(str, num) {
    if (num > 0) {
        return str.repeat(num);
    } else {
        return "";
    }
}

function truncateString(str, num) {
    if (num >= 3) {
        if (str.length <= num) {
            return str;
        } else {
            return str.slice(0, num - 3) + "...";
        }
    } else {
        if (str.length <= num) {
            return str;
        } else {
            return str.slice(0, num) + "...";
        }
    }
}

//array manipulations
function largestOfFour(arr) {
    var aValue = 0;
    var newThing = [];
    for (i = 0; i < arr.length; i++){
        aValue = 0;
            for (j = 0; j < arr.length; j++) {
                if (arr[i][j] > aValue) {
                    aValue = arr[i][j];
                }
            } newThing.push(aValue);
    }
    return newThing;
}

function mutation(arr) {
    var oneValue = arr[0].toLowerCase();
    var twoValue = arr[1].toLowerCase();
    for (var i = 0;i < twoValue.length; i++) {
        if (oneValue.indexOf(twoValue[i]) < 0)
            return false;
    }
    return true;
}

function bouncer(arr) {
    function notFalse(value) {
        if (value === null || value === false ||  value === 0 || value === "" || value === undefined || (typeof value === "number" && isNaN(value))) {
            return false;
        } else {
            return true;
        }
    }   
    var filtered = arr.filter(notFalse);
    return filtered;
}

function destroyer(arr) {
    var boom = arguments[1];
    var bam = arguments[2];
    var pop = arguments[3];
    function pow(value){
        return value !== boom && value !== bam && value !== pop;
    }
    var filtered = arguments[0].filter(pow);
    return filtered;
}

function sumAll(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    var newArray = [];
    for (var i= min; i < max +1; i++) {
        newArray.push(i);
    }
    var total = newArray.reduce(function(a, b) {
        return a + b;
    }, 0);
    return total;
}

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

function smallestCommons(arr) {
    arr.sort(function(a,b) {
        return b-a;
    });
    var newArr = [];
    for (var i=arr[0]; i>=arr[1]; i--) {
        newArr.push(i);
    }
    var quot = 0;
    var loop = 1;
    var n;
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n=2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
            break;
            }
        }
        loop++;
    } while (n!== newArr.length);
    return quot;
} 

//two arrays
function diffArray(arr1, arr2) {
    var indexnone1 = [];
    var indexnone2 = [];
    for (var i =0; i<arr1.length; i++) {
        var index1 = arr2.indexOf(arr1[i]);
        if (index1 === -1) {
            indexnone1.push(arr1[i]);
        } else {
            indexnone2.push(index1);
        }
    }
    for (i=0; i <arr2.length; i++) {
        var index2 = arr1.indexOf(arr2[i]);
        if (index2 === -1) {
            indexnone1.push(arr2[i]);
        } else {
            indexnone2.push(index2);
        }
    }
    return indexnone1;
}

//one array, one number
function slasher(arr, num) {
    arr.splice(0, num);
        return arr;
}

function chunkArrayInGroups(arr, num) {
    var monkey = [];
    for (var i = 0; i < arr.length; i += num) {
        monkey.push(arr.slice(i, i+num));
    } 
    return monkey; 
}

function getIndexToIns(arr, num) {  
    function compareNumbers(a,b){
        return a-b;
    }
    var sortedArr = arr.sort(compareNumbers);
    var value;
    var otherVal;
    for (var i=0; i<sortedArr.length; i++) {
        if (num === sortedArr[i]) {
            value = i;
        } else if (num > sortedArr[i]) {
            value = i + 1;
        } else {           
            otherVal = sortedArr[i];
        }
    }
    return value;
} 

//one number
function convertToRoman(num) {
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

    var romanNines; 
    var romanFours;
    var romanFourties;
    var romanNineties;
    var romanFourHundreds;
    var romanNineHundreds;

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
    var numerals = [];
    numerals.push(romanThousands, romanNineHundreds, romanFiveHundreds, romanFourHundreds, romanHundreds, romanNineties, romanFifties, romanFourties, 
    romanTens, romanNines, romanFives, romanFours, romanOnes);
    return numerals.join("");
}

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

function factorialize(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

//one boolean
function booWho(bool) {
    if (typeof bool === "boolean") {
        return true;
    } else {
        return false;
    }
}

//one array, one function
function findElement(arr, func) {
  var filtered = arr.filter(func);
  return filtered[0];
}

function dropElements(arr, func) {
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




