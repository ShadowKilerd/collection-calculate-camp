'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let nn = collection.filter(n => n % 2 == 1);
  return nn.reduce((a,b)=>a+b) / nn.length;
}

module.exports = average_uneven;
