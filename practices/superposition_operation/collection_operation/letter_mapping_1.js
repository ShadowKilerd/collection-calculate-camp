'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  return collection.filter((number) => number % 2 == 0).map(number => String.fromCharCode(number + 96));
}

module.exports = even_to_letter;
