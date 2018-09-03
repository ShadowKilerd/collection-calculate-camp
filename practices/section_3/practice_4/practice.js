function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let counter = collection_a.reduce((count, item) => {
    if (item.includes('-')) {
      let [char, number] = item.split('-');
      count[char] = (count[char] || 0) + parseInt(number);
    }else {
      count[item] = (count[item] || 0) + 1;
    }
    return count;
  }, {});

  const NUMBERS = object_b.value;
  return Object.keys(counter).map((item) => {
    if(NUMBERS.includes(item)) {
      return {key: item, count: counter[item] -= parseInt(counter[item] / 3)};
    }
    return {key: item, count: counter[item]};
  });
}

module.exports = create_updated_collection;
