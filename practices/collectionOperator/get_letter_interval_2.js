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

var get_integer_interval = require('./get_integer_interval.js');

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  return get_integer_interval(number_a, number_b).map(function(number) {
    return chars(number);

  });

}

module.exports = get_letter_interval_2;

