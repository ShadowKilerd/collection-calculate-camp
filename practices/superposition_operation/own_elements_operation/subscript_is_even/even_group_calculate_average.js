'use strict';
var even_group_calculate_average = function(collection){
  let n = collection.map((item, index) => index % 2 == 1 ? item : null).filter(n => n!== null).filter(n=>n%2 == 0)
  .reduce((d, item) => {
    d[item.toString().length] = d[item.toString().length] || [];
  d[item.toString().length].push(item);
    return d;
  }, {});

  let ret = Object.keys(n).map(item => {
    return n[item].reduce((a,b)=>a+b) / n[item].length;
  });

  return ret.length > 0 ? ret : [0];
};
module.exports = even_group_calculate_average;
