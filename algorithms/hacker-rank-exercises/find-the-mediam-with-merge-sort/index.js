function mergeSort(arr) {
  if (arr.length > 1) {
    const sorted = [];
    const dividerPoint = Math.floor(arr.length / 2);
    const partioned = arr.reduce(
      (accumulator, value, index) => {
        if (index < dividerPoint) {
          accumulator[0].push(value);
        } else {
          accumulator[1].push(value);
        }

        return accumulator;
      },
      [[], []]
    );

    const left = mergeSort(partioned[0]);
    const right = mergeSort(partioned[1]);
    const leftSize = left.length;
    const rightSize = right.length;

    for (let i = 0; i < leftSize + rightSize; i++) {
      if (right[0] === undefined) {
        sorted.push(left.shift());
      } else if (left[0] === undefined) {
        sorted.push(right.shift());
      } else if (left[0] <= right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return sorted;
  }

  return arr;
}
// Complete the findMedian function below.
function findMedian(arr) {
  const sort = mergeSort(arr);

  return sort[Math.floor(sort.length / 2)];
}
