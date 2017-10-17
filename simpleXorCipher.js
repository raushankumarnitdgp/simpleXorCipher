//encrypting the string
var encryptDecrypt = function(str) {
    var key = 2317893231789397;
    var cryptStr = '';
    var xorValue ;
    for(var i = 0; i<str.length; i++) {
     xorValue = str[i].charCodeAt(0) ^ key;
     cryptStr += String.fromCharCode(xorValue);
    }
    return cryptStr;
}

console.log(encryptDecrypt('12344587457343448384'));
console.log(encryptDecrypt(encryptDecrypt('132847938473897394734347')));