//Original input
const a = [2, 6, 1, 4, 8, 3, 13, 123, 34, 1234, 11, 10];

/**
 * Focus here ;)
 */
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

function main() {
  const sortStartTime = performance.now();
  const sort = mergeSort(a);
  const sortEndTime = performance.now();

  document.querySelector("#result").innerHTML = `
    output: [${sort}] the operation took <b>${(
    sortEndTime - sortStartTime
  ).toFixed(4)} milliseconds </b>
  `;
}

document.querySelector("button").addEventListener("click", main);
