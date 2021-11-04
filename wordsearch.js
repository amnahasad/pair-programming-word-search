const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    console.log('hello');
    return false;
  }

  if (typeof word !== 'string') {
    console.log('hello2');
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));

  let newArr = [];

  for (let i = 0; i < letters.length - 1; i++) {
    let tempArr = [];

    for (let j = 0; j < letters[i].length; j++) {
      tempArr.push(letters[j][i]);
    }
    newArr.push(tempArr);
  }
  const verticalJoin = newArr.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};



module.exports = wordSearch;