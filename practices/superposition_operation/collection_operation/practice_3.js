'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码

  return collection.filter(number => number % 2 == 1).map(number => number * 3 + 5).reduce((a,b)=>a+b);
}

module.exports = hybrid_operation_to_uneven;

