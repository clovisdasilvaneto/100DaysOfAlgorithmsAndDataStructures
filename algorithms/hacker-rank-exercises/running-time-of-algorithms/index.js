const input = [4, 4, 3, 4];

const runningTime = arr => {
  let shifts = 0;

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (arr[j] < arr[j - 1]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
      shifts++;
    }
  }

  return shifts;
};

runningTime(input);
