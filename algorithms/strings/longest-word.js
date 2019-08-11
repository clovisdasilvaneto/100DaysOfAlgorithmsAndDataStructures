function findLongestWordLength(str) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}

const result = findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
);
console.log("result: ", result);
console.log(
  `I didn't decide to use split because it already use a for loop inside to return an array, so it's more peformatic to use a single for loop`
);
