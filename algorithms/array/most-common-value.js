const values = [1, 2, 3, 1, 6, 3, 4, 5, 6, 2, 1];

const getMostCommonValue = arr => {
  return arr.reduce(
    (acc, value) => {
      if (isNaN(acc[value])) {
        acc[value] = 0;
      } else {
        acc[value] += 1;
      }

      if (!acc.common || acc[acc.common] < acc[value]) {
        acc.common = value;
      }

      return acc;
    },
    { common: null }
  ).common;
};

console.log(getMostCommonValue(values));
console.log("-------------------------------------------");
console.log("The time complexy of this solution was O(N)");
console.log("-------------------------------------------");
