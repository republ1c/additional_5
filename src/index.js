module.exports = function check(str, bracketsConfig) {
  var result = true;
  for (var j = 0; j < bracketsConfig.length; j++) {
    var bracketOpen = bracketsConfig[j][0];
    var bracketClose = bracketsConfig[j][1];
    var bracketsOpen = [];
    var bracketsClose = [];
    for (var a in str) {
      if (str[a] === bracketOpen) {
        bracketsOpen.push(bracketOpen);
      }
      a++;
    }
    for (var b in str) {
      if (str[b] === bracketClose) {
        bracketsClose.push(bracketClose);
      }
      b++;
    }
    if (bracketsOpen.length !== bracketsClose.length) { return result = false; break; } // check even pair
    if ((bracketsOpen.length === 0) && (bracketsClose.length === 0)) { continue; }
    var i = 0;
    var str1 = str;
    for (i; i < str1.length; i++) {
      bracketOpen = str1.indexOf(bracketsConfig[j][0], i);
      bracketClose = str1.indexOf(bracketsConfig[j][1], i);
      if (bracketOpen > bracketClose) { return result = false }
      if (bracketClose - bracketOpen === 2) {
        if (!((str1[bracketClose - 1] === bracketsConfig[j][1]) || (str1[bracketOpen + 1] === bracketsConfig[j][0]))) {
          return result = false; break;
        }
      }
      if ((bracketOpen === -1) || (bracketClose === -1)) { break; }
      else {
        str1 = str1.substr(0, bracketOpen) + str1.substr(++bracketOpen);
        str1 = str1.substr(0, bracketClose - 1) + str1.substr(++bracketClose - 1);
        i = i - 1;
      }
    }
  }
  return result;
}
