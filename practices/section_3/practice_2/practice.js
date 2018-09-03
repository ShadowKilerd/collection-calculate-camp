function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  const NUMBERS = object_b.value;

  let ret = [];

  return collection_a.map((item) => {
    if(NUMBERS.includes(item.key)) {
      item.count -= parseInt(item.count / 3);
    }
    return item;
  });

}

module.exports = create_updated_collection;
