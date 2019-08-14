const a = [1, 2, 3, 4, 5, 6];
const b = [4, 5, 6, 1, 2, 3];
const c = [1, 2, 3, 6, 7, 9];
const d = [3, 6, 7, 9, 1, 2];

const isRotation = (a, b, index = 0, resetIndex) => {
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

  return isRotation(a, b, index, resetIndex);
};

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
console.log("--------------------------------------------------");
