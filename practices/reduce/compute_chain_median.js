'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let numberArray = collection.split("->").map(number => Number.parseInt(number)).sort((a, b) => a - b);
  let length = numberArray.length;
  if(length % 2 === 0) {
    return (numberArray[length/2] + numberArray[length/2 - 1]) / 2;
  } else {
    return numberArray[(length - 1)/2];
  }
}

module.exports = compute_chain_median;
