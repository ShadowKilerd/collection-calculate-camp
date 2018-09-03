'use strict';
var single_element = function(collection){
  let n = collection
    .map((item, index) => index % 2 === 1 ? item : 0)
    .filter(n => n != 0);

  return n.filter(item=> {
    return n.filter(a => a === item).length === 1;
  })



};
module.exports = single_element;
