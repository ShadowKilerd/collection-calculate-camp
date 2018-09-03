'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(function (number) {
    return collection_a.indexOf(number) != -1;
  })
}

module.exports = get_intersection;
