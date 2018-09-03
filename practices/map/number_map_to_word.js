'use strict';
var number_map_to_word = function(collection){
  return collection.map(function(number){
    return String.fromCharCode(number+96);
  })
};

module.exports = number_map_to_word;
