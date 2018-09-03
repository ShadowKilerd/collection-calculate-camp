'use strict';
var rank_asc = function(collection){
  return collection.sort(function (a, b) { return a <= b });
};

module.exports = rank_asc;
