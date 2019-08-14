const a = [1, 3, 4, 6, 7, 9];
const b = [1, 2, 4, 5, 9, 10, 11];

const mostCommon = (a, b) => {
  let pointA = (pointB = 0);
  const result = [];

  while (pointA < a.length && pointB < b.length) {
    if (a[pointA] === b[pointB]) {
      result.push(a[pointA]);
      pointA = pointB++;
    } else if (a[pointA] < b[pointB]) {
      pointA++;
    } else {
      pointB++;
    }
  }
  return result;
};

console.log("Result:");
console.log(mostCommon(a, b));
console.log("--------------------------------");
console.log("Time complexty: O(max(n,m))");
