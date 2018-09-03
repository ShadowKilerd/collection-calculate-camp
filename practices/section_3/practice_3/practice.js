function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let counter = collection_a.reduce((counter, number) => {
    counter[number] = (counter[number] || 0) + 1;
    return counter;
  }, {});

  const NUMBERS = object_b.value;

  return Object.keys(counter).map((key) => {
    if (NUMBERS.includes(key)) {
      counter[key] -= parseInt(counter[key] / 3);
    }
    return {key: key, count: counter[key]};
  });

}

module.exports = create_updated_collection;
