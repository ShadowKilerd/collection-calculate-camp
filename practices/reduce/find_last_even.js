'use strict';

function find_last_even(collection) {
  //在这里写入代码
  return collection.filter((a) => a % 2 == 0).reverse()[0];
}

module.exports = find_last_even;
