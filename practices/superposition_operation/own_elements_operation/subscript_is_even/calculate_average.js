'use strict';
var calculate_average = function(collection){
  let numbers = collection.map((n, index) => {
    return index % 2 == 1 ? n : 0;
  }).filter(n => n !== 0);

  return numbers.reduce((a, b) => a+b) / numbers.length;
};
module.exports = calculate_average;
