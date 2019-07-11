function partition(arr, left, right) {
  const pivot = right;

  while (left < right) {
    if (arr[left] < arr[pivot]) {
      left++;
    }

    if (arr[right] > arr[pivot]) {
      right--;
    }

    if (arr[left] > arr[right]) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  [arr[left], arr[pivot]] = [arr[pivot], arr[left]];

  return left;
}

function quickSort(arr, left, right) {
  if (left < right) {
    const indexPoint = partition(arr, left, right);
    quickSort(arr, left, indexPoint - 1);
    quickSort(arr, indexPoint, right);
  }
}

//Original input
const a = [4, 6, 2, 3, 8, 9, 1, 10, 23];

quickSort(a, 0, a.length - 1);

console.log(a);
