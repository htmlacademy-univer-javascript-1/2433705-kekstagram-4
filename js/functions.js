function checkLength(str, maxLength){                          //1 задача
  const length = str.length;
  if(length<=maxLength){
    return true;
  }
  return false;
}

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

function checkPalindrome(str) {                                //2 задача
  const lowerCaseStr = str.toLowerCase().replaceAll(' ', '');
  const length = lowerCaseStr.length;
  for (let i = 0; i < length / 2; i++) {
    if (lowerCaseStr.charAt(i)!== lowerCaseStr.charAt(length - 1 - i)) {
      return false;
    }
  }
  return true;
}

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');

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

checkNumber('2023 год');
checkNumber(('а я томат'));

function isCorrectMeeting(startDay, endDay, startMeeting, duration){
  const [startHour, startMinute] = splitTime(startDay);
  const [endHour, endMinute] = splitTime(endDay);
  const [meetingStartHour, meetingStartMinute] = splitTime(startMeeting);
  const meetingEndHour =  Math.floor(meetingStartHour + duration / 60);
  const meetingEndMinute = (meetingStartMinute + duration) % 60;
  if(meetingStartHour < startHour ||
    (meetingStartHour === startHour && meetingStartMinute < startMinute) ||
      meetingEndHour > endHour ||
      (meetingEndHour === endHour && meetingEndMinute > endMinute)
  ){
    return false;
  }
  return true;
}

function splitTime(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return [hours, minutes];
}

