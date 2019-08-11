const largestOfFour = arr =>
  arr.map(group =>
    group.reduce((prev, current) => (current > prev ? current : prev))
  );

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
console.log("Time complexty O(N)2 - Quadratic");
