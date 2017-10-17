//encrypting the string
var encryptDecrypt = function(str) {
    var key = 2317893;
    var cryptStr = '';
    var xorValue ;
    for(var i = 0; i<str.length; i++) {
     xorValue = str[i].charCodeAt(0) ^ key;
     cryptStr += String.fromCharCode(xorValue);
    }
    return cryptStr;
}

console.log(encryptDecrypt('xt-edge-1'));
console.log(encryptDecrypt(encryptDecrypt('xt-edge-1')));