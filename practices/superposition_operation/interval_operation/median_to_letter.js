'use strict';


function numberToAsciiMapper(number) {
  return String.fromCharCode(number + 96)
}

function calculateTimesAndChar(number) {
  var times = parseInt(number / 26);
  var char = (number % 26);
  if(char == 0) {
    return [times - 1, 26];
  }
  return [times, char];
}
function chars(number){
  var ret = calculateTimesAndChar(number);
  if(ret[0] != 0) {
    return numberToAsciiMapper(ret[0]) + numberToAsciiMapper(ret[1]);
  }else {
    return numberToAsciiMapper(ret[1]);
  }
}
function median_to_letter(collection) {

  //在这里写入代码
  collection = collection.sort((a,b)=>a-b);

  let length = collection.length;
  if (length % 2 == 0) {
    // return [length/2, sortedCollection[length/2], sortedCollection[length/2 - 1]];
    return chars(Math.floor((collection[length/2] + collection[length/2 - 1]) / 2) +1 );
  } else {
    return chars(collection[(length-1) / 2]);
  }
}

module.exports = median_to_letter;
