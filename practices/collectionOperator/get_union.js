'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  collection_b.filter(function(item) {
    return collection_a.indexOf(item) == -1;
  }).map(function(item) {
    collection_a.push(item);
  })
  return collection_a;
}

module.exports = get_union;

