function insertionSort1(n, arr) {
  let shiftedValue = arr[n - 1];
  let shifted;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] > shiftedValue) {
      arr[i] = arr[i - 1];
      shifted = true;
    } else {
      const old = shiftedValue;
      shiftedValue = arr[i - 1];

      if (arr[i] != old) {
        shifted = true;
        arr[i] = old;
      }
    }

    if (shifted) {
      console.log(arr.join(" "));
    }

    shifted = false;
  }
}
