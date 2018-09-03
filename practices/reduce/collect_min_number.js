'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(function (currentMin, next) {
    return currentMin > next ? next : currentMin;
  })
}

module.exports = collect_min_number;

