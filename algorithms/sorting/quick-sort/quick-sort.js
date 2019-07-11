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
let times = 0;

/**
 * Focus here ;)
 */
function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
}

function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    const indexPoint = partition(arr, left, right, pivot);

    quickSort(arr, left, indexPoint - 1);
    quickSort(arr, indexPoint, right);
  }
}

function setup() {
  //just to not mutate `a`
  const sort = [...a];

  const firstWayStartTime = performance.now();
  quickSort(sort, 0, sort.length - 1);
  const firstWayEndTime = performance.now();

  //Just show the result on the page :+1
  document.querySelector("#result").innerHTML = `
    output without break condition: [${sort}] the operation took <b> ${(
    firstWayEndTime - firstWayStartTime
  ).toFixed(4)} milliseconds.</b>
  <br />
  <b>PS: it's an algorithm that is very efficient for a large ammount of data.</b>
  `;
}

document.querySelector("button").addEventListener("click", setup);
