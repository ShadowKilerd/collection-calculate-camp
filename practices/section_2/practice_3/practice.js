function count_same_elements(collection) {
  //在这里写入代码
  const SPLITERS = ['-', ':'];

  let counter = {};

  collection.map((item) => {
    let splitedChars = SPLITERS.filter((char)=> item.includes(char));
    if (splitedChars.length >= 1) {
      let splitedChar = splitedChars[0];
      let [char, number] = item.split(splitedChar);
      counter[char] = (counter[char] || 0) + parseInt(number);

    } else if (item.includes('[')) {
      let [char, rest] = item.split('[');
      let number = (rest.split(']'))[0];
      counter[char] = (counter[char] || 0) + parseInt(number);

    } else {
      counter[item] = (counter[item] || 0) + 1;
    }
  });

  return Object.keys(counter).map((key) => ({name: key, summary: counter[key]}));
}

module.exports = count_same_elements;
