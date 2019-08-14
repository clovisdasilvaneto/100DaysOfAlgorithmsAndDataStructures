const a = [1, 2, 3, 4, 5, 6];
const b = [4, 5, 6, 1, 2, 3];
const c = [1, 2, 3, 6, 7, 9];
const d = [3, 6, 7, 9, 1, 2];
const e = [92, 82, 72, 92, 21, 22];

const checkRotation = (a, b, index = 0, resetIndex) => {
  if (index > a.length - 1 && !isNaN(resetIndex)) {
    return true;
  }

  if (
    (index > a.length - 1 && isNaN(resetIndex)) ||
    (!isNaN(resetIndex) && a[index] !== b[index + resetIndex])
  ) {
    return false;
  }

  if (!isNaN(resetIndex) && a[index] === b[index + resetIndex]) {
    index += 1;

    if (resetIndex + index > b.length - 1) {
      resetIndex = -index;
    }
  } else if (a[0] !== b[index]) {
    index += 1;
  } else if (a[0] === b[index]) {
    resetIndex = index;
    index = 1;
  }

  return checkRotation(a, b, index, resetIndex);
};

const isRotation = (a, b) =>
  a.length == b.length ? checkRotation(a, b) : false;

console.log("--------------------------------------------------");
console.log("There are no duplicated value in the array elements");
console.log("------------------SHOULD BE TRUE------------------");
console.log(isRotation(a, b));
console.log(isRotation(c, d));
console.log(isRotation(d, c));
console.log(isRotation(b, a));
console.log("--------------------------------------------------");
console.log("------------------SHOULD BE FALSE------------------");
console.log(isRotation(a, c));
console.log(isRotation(a, d));
console.log(isRotation(d, b));
console.log(isRotation(b, c));
console.log(isRotation(a, e));
console.log("--------------------------------------------------");
