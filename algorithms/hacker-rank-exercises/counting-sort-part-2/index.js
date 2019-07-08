function countingSort(arr) {
  return arr
    .reduce((accumulator, value, index) => {
      if (accumulator[value]) {
        accumulator[value] += 1;
      } else {
        accumulator[value] = 1;
      }

      return accumulator;
    }, [])
    .reduce((accumulator, value, index) => {
      if (value) {
        console.log(value, index);
        for (let i = 0; i < value; i++) {
          accumulator.push(index);
        }
      }

      return accumulator;
    }, []);
}
