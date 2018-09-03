'use strict';

var LITERAL_CHAR = ['a', 'b', 'c', 'd', 'e'];

var get_integer_interval = require('./get_integer_interval.js');


function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var number_ret = get_integer_interval(number_a, number_b);
  return number_ret.map(function(number) {
    return LITERAL_CHAR[number - 1];
  })
}

module.exports = get_letter_interval;
