//Original input
const a = [
  4,
  6,
  2,
  3,
  8,
  9,
  1,
  10,
  23,
  0,
  12312,
  123,
  12,
  3452352,
  5242342,
  9646,
  3958,
  265,
  144
];
const target = 12312;
let result;
let i = 0;

while (!result || i < a.length) {
  if (a[i] === target) {
    result = { i, value: a[i] };
  }

  i++;
}

console.log("result:");
console.log(result);
console.log(
  "time complexity: O(n) - in the worst case, we check each element once."
);
