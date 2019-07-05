function insertionSort2(n, arr) {
  for (let i = 0; i < n; i++) {
    let j = i;

    if (i) {
      while (arr[j] < arr[j - 1] && j > 0) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }

      console.log(arr.join(" "));
    }
  }
}
