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

var number_map_to_word_over_26 = function(collection){
  return collection.map(function(number) {
    return chars(number);
  })
};

module.exports = number_map_to_word_over_26;
