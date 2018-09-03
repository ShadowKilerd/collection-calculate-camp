function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter((item)=>{
    return collection_b.map((innerArray) => innerArray.includes(item)).includes(true);
  })
}

module.exports = collect_same_elements;
