'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let ret = [number];
  while(number > 0) {
    number -= interval;
    number = Number.parseFloat(number.toFixed(1));
    ret.push(number);

  }
  return ret;
}

module.exports = spilt_to_zero;
