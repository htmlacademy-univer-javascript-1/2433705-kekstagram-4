function checkLength(str, maxLength){                          //1 задача
  let length = str.length;
  if(length<=maxLength){
    return true;
  }
  return false;
}
console.log(checkLength('проверяемая строка', 20));
console.log(checkLength('проверяемая строка', 18));
console.log(checkLength('проверяемая строка', 10));

function checkPalindrome(str) {                                //2 задача
  let lowerCaseStr = str.toLowerCase().replaceAll(' ', '');
  const length = lowerCaseStr.length;
  for (let i = 0; i < length / 2; i++) {
    if (lowerCaseStr.charAt(i)!== lowerCaseStr.charAt(length - 1 - i)) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('топот'));
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));

function checkNumber(string){                                  // 3 задача
  string = string.toString().replaceAll(' ', '');
  let result = '';
  for(let i = 0; i<string.length; i++){
    if(!isNaN(string[i])){
      result+=parseInt(string[i], 10);
    }
  }
  return result===''? NaN: result;
}

console.log(checkNumber('2023 год'));
console.log(checkNumber(('а я томат')));

