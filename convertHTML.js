function convertHTML(str) {
var chars = [/&/g, /</g, />/g, /(["])/g, /(['])/g];
var htmls = ["&amp;","&lt;","&gt;","&quot;","&apos;"];
  for (var i=0; i<chars.length; i++) {
  str = str.replace(chars[i], htmls[i]);
}
  return str;
}

convertHTML("Dolce & Gabbana");
