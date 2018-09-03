'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(function (number) {
    return collection_b.map(function(div) {
      return number % div === 0;
    }).indexOf(true) !== -1;
  })
}

module.exports = choose_divisible_integer;
