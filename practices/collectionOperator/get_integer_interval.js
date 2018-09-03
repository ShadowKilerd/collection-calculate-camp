'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var operation = number_a > number_b ? -1 : 1;
  var ret = [];
  while(number_a !== number_b){
    ret.push(number_a);
    number_a += operation;
  }
  ret.push(number_b);
  return ret;
}

module.exports = get_integer_interval;

