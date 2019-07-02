//Original input
const a = [2, 6, 1, 4, 8, 3, 13, 123, 34, 1234, 11, 10];

/**
 * Just receive an array and do the swap based on two index
 * @param {array} arr
 * @param {number} a
 * @param {number} b
 */
function swap(arr, a, b) {
  const old = arr[a];
  arr[a] = arr[b];
  arr[b] = old;
}

/**
 * Focus here ;)
 */
function sellectionSort() {
  //just to not mutate `a`
  const sort = [...a];

  //first way (without break condition)
  const sortStartTime = performance.now();
  for (let i = 0; i < sort.length - 1; i++) {
    let smallest = i;

    for (let j = i + 1; j < sort.length; j++) {
      if (sort[smallest] > sort[j]) {
        smallest = j;
      }
    }

    if (sort[smallest] != sort[i]) {
      swap(sort, smallest, i);
    }
  }
  const sortEndTime = performance.now();

  document.querySelector("#result").innerHTML = `
    output: [${sort}] the operation took <b>${(
    sortEndTime - sortStartTime
  ).toFixed(4)} milliseconds </b>
  `;
}

document.querySelector("button").addEventListener("click", sellectionSort);
