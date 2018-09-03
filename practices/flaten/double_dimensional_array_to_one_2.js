'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var ret = [];
  collection.map(function(item) {
    if (!(item instanceof Array)) {
      item = [item];
    }
    item.map(function(innerItem) {
      if (ret.indexOf(innerItem) === -1){
        ret.push(innerItem);
      }
    })
  })
  return ret;
}

module.exports = double_to_one;
