function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let numbers = object_b.value;
  return collection_a.map((item) => {
    if(numbers.includes(item.key)) {
      item.count -= 1;
    }
    return item;
  });

}

module.exports = create_updated_collection;
