'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var ret = [];
  collection.map(function(item){
    if(item instanceof Array) {
      item.map(function(innerItem) {
        ret.push(innerItem);
      })
    }else {
      ret.push(item);
    }
  });
  return ret;
}

module.exports = double_to_one;
