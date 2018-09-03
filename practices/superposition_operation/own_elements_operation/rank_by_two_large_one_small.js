'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let n = collection.sort((a,b)=>a-b);
  let ret = [];


  let last = n.reduce((innerList, item)=>{

    if(innerList.length === 3) {
    let first = innerList[0];
    innerList.splice(0, 1);
    innerList.push(first);
    ret.push(...innerList);
    innerList = [];
  }
  innerList.push(item);
  return innerList;

}, []);

  ret.push(...last);

return ret;

}
module.exports = rank_by_two_large_one_small;
