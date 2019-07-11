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
function bubbleSort() {
  //just to not mutate `a`
  const firstWay = [...a];
  const betterWay = [...a];
  let isSorted;

  //first way (without break condition)
  const firstWayStartTime = performance.now();
  for (let i = 0; i < firstWay.length - 1; i++) {
    for (let j = 0; j < firstWay.length - 1; j++) {
      if (firstWay[j] > firstWay[j + 1]) {
        swap(firstWay, j, j + 1);
      }
    }
  }
  const firstWayEndTime = performance.now();

  //better way, putting a break condition
  let lastSorted = betterWay.length - 1;
  const betterWayStartTime = performance.now();
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastSorted; i++) {
      if (betterWay[i] > betterWay[i + 1]) {
        swap(betterWay, i, i + 1);
        isSorted = false;
      }
    }
    lastSorted--;
  }
  const betterWayEndTime = performance.now();

  //Just show the result on the page :+1
  document.querySelector("#without-break-condition").innerHTML = `
    output without break condition: [${firstWay}] the operation took <b> ${(
    firstWayEndTime - firstWayStartTime
  ).toFixed(4)} milliseconds </b>
  `;

  document.querySelector("#with-break-condition").innerHTML = `
    output with break condition (better way): [${betterWay}] the operation took <b>${(
    betterWayEndTime - betterWayStartTime
  ).toFixed(4)} milliseconds </b>
  `;
}

document.querySelector("button").addEventListener("click", bubbleSort);
