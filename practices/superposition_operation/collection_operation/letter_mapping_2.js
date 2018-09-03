'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  return String.fromCharCode(Math.floor(collection.reduce((a, b) => a + b) / collection.length) + 1 + 96);
}

module.exports = average_to_letter;

