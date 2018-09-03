'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce(function(currentMax, next){
    return currentMax > next ? currentMax : next;
  })
}

module.exports = collect_max_number;
