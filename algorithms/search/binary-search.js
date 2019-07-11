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

const search = (arr, target, left, right) => {
  const middle = Math.floor(left + (right - left) / 2);
  const middleValue = arr[middle];

  if (middleValue == target) {
    return { index: middle, value: middleValue };
  } else if (middleValue > target) {
    return search(arr, target, left, middle - 1);
  } else if (middleValue < target) {
    return search(arr, target, middle + 1, right);
  }

  return false;
};

const binarySearch = (arr, target, left, right) => {
  //you can implement your custom sort
  //but I'll focus on the binary-search =D
  const sorted = arr.sort((a, b) => a - b);

  return search(sorted, target, left, right);
};

const result = binarySearch(a, target, 0, a.length);

console.log("result:");
console.log(result);
console.log(
  "time complexity: O(n) - in the worst case, we check each element once."
);
