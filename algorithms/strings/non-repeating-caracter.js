const findSingleCaracter = word => {
  const hashMap = {};

  for (let i = 0; i < word.length; i++) {
    if (hashMap[word[i]]) {
      delete hashMap[word[i]];
    } else {
      hashMap[word[i]] = true;
    }
  }

  for (let prop in hashMap) {
    hashMap.single = prop;
    break;
  }

  return hashMap.single;
};

const a = "aabbc";
const b = "aazycc";
const c = "aabb";

//If there's more than one non_repeatable, you should
//show only the first one
console.log("a: ", findSingleCaracter(a));
console.log("b: ", findSingleCaracter(b));
console.log("c: ", findSingleCaracter(c));
