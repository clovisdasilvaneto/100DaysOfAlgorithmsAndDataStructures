const set1 = [1, 2, 3, 9];
const set2 = [1, 2, 4, 4];
const sumTotal = 8;

const hasPairSum = (set, sum) => {
  const dictionary = {};
  let i = 0;
  let hasPair;

  while (i < set.length && !hasPair) {
    if (dictionary[set[i] - sum]) {
      hasPair = true;
      break;
    }

    dictionary[set[i] - sum] = true;
    i++;
  }

  return hasPair;
};

console.log(`has sum in set1`, hasPairSum(set1, sumTotal));
console.log(`has sum in set2`, hasPairSum(set2, sumTotal));
console.log("Time complexty: O(n) =D");
