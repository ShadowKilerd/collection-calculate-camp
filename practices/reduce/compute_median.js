'use strict';

function compute_median(collection) {
  //在这里写入代码
  let sortedCollection = collection.sort((a, b)=> a - b);

  let length = sortedCollection.length;
  if (length % 2 == 0) {
    // return [length/2, sortedCollection[length/2], sortedCollection[length/2 - 1]];
    return (sortedCollection[length/2] + sortedCollection[length/2 - 1]) / 2;
  } else {
    return sortedCollection[(length-1) / 2];
  }
}

module.exports = compute_median;


