'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var ret = {};
  collection.map(function(number){
    ret[number] = (ret[number] || 0) + 1;
  })
  return ret;
}

module.exports = grouping_count;
