import usePerformance from "../hooks/usePerformance";

export const insertion = data => {
  const [time, result] = usePerformance(() => {
    for (let i = 0; i < data.length; i++) {
      let currentVal = data[i];
      let j = i;

      while (j > 0 && data[j - 1] > currentVal) {
        data[j] = data[j - 1];

        j--;
      }

      data[j] = currentVal;
    }

    return data;
  });

  return {
    time,
    values: result
  };
};

export const insertionRight = data => {
  const [time, result] = usePerformance(() => {
    for (let i = data.length - 1; i >= 0; i--) {
      let j = i;

      while (data[j + 1] && data[j + 1] < data[j]) {
        let old = data[j];
        data[j] = data[j + 1];
        data[j + 1] = old;

        j++;
      }
    }

    return data;
  });

  return {
    time,
    values: result
  };
};
