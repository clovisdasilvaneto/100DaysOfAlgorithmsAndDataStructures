function confirmEnding(str, target) {
  let isTheSame = true;
  const targetSize = target.length - 1;
  const size = str.length - 1;

  for (i = size; i > size - target.length; i--) {
    if (str[i] !== target[i + targetSize - size]) {
      isTheSame = false;
    }
  }

  return isTheSame;
}

console.log(confirmEnding("Congratulation", "ion"));
