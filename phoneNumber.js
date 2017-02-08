function telephoneCheck(str) {
//str versions
  var newerStr;
  var newestStr;

  //regexes
  var parpattern = new RegExp (/\([0-9][0-9][0-9]\)/g);
  var regex = new RegExp (/\(|\)/g);
  var regexpat = new RegExp (/-| /g);

  //check for dash at beginning
  if (str[0] === "-") {
    return false;
  }

  //get rid of dashes & spaces  
  var newStr = str.replace(regexpat, "");

  //check for country code at the beginning
  if (newStr[0] === "1" && str.length > 10) {
    newerStr = newStr.substr(1, str.length);
  } else {
    newerStr = newStr;
  }

  //check for paired parentheses  
  if (parpattern.test(newerStr) && newerStr.length === 12) {
    return true;
  //check for unpaired parentheses  
  } if (regex.test(newerStr)) { 
    return false;
  } else {
    newestStr = newerStr;
  }

  //check for length  
  if (newestStr.length === 10) {
    return true;
  } else {
    return false;
  }
}


telephoneCheck("5555555555");
