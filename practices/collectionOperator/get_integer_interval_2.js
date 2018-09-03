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

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  return get_integer_interval(number_a, number_b).filter(function(number) {
    return number % 2 === 0;
  })
}

module.exports = get_integer_interval_2;
