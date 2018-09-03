function count_same_elements(collection) {
  //在这里写入代码
  let counter = {};
  collection.map((number) => {
    counter[number] = (counter[number] || 0) + 1;
  });
  return Object.keys(counter).map((key) => ({key: key, count: counter[key]}));


}

module.exports = count_same_elements;
