'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var ret = [];
  collection.map(function(number){
    if(ret.indexOf(number) === -1) {
      ret.push(number);
    }
  });
  return ret;
}

module.exports = choose_no_repeat_number;
