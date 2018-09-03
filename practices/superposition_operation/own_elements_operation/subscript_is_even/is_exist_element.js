'use strict';
var is_exist_element = function(collection,element){
  return collection.map((item, index) => index % 2 == 0 ? item : 0).filter(n => n !== 0).includes(element);
};
module.exports = is_exist_element;
