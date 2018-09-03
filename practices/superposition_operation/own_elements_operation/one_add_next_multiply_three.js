'use strict';
function one_add_next_multiply_three(collection){

  let ret = [];

  collection.reduce((a,b) => {
    ret.push((a+b)*3);
    return b;
  })

  return ret;
}
module.exports = one_add_next_multiply_three;
