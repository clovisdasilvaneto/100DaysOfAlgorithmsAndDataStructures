//Original input
const a = [2, 6, 1, 4, 8, 3, 13, 123, 34, 1234, 11, 10];

function insertionSort() {
  //just to not mutate `a`
  const sort = [...a];

  const sortStartTime = performance.now();
  for (let i = 0; i < sort.length; i++) {
    let j = i;

    while (sort[j - 1] && sort[j - 1] > sort[j]) {
      let old = sort[j];
      sort[j] = sort[j - 1];
      sort[j - 1] = old;

      j--;
    }
  }
  const sortEndTime = performance.now();

  document.querySelector("#result").innerHTML = `
    output: [${sort}] the operation took <b>${(
    sortEndTime - sortStartTime
  ).toFixed(4)} milliseconds </b>
  `;
}

document.querySelector("button").addEventListener("click", insertionSort);
