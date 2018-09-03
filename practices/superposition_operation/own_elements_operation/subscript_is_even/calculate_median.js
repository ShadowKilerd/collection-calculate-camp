'use strict';
var calculate_median = function(collection){
  let num = collection.map((n, index) => index % 2 == 1 ? n : 0).filter(n => n !== 0);
  let length = num.length;
  if (length % 2 == 0) {
    // return [length/2, sortedCollection[length/2], sortedCollection[length/2 - 1]];
    return (num[length/2] + num[length/2 - 1]) / 2;
  } else {
    return num[(length-1) / 2];
  }

};
module.exports = calculate_median;
