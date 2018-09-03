function count_same_elements(collection) {
  let counter = {};

  collection.map((item) => {
    if(item.includes("-")) {
      let splitedItem = item.split("-");
      let [char, number] = splitedItem;
      number = parseInt(number);
      counter[char] = (counter[char] || 0) + number;
      } else {
        counter[item] = (counter[item] || 0) + 1;
      }
  });

  return Object.keys(counter).map((key) => ({key, count: counter[key]}));
}

module.exports = count_same_elements;
