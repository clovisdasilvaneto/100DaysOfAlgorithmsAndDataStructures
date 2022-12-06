function getHourGlasses(arr, columnIndex, rowIndex) {
  return (
    arr[rowIndex][columnIndex] +
    arr[rowIndex][columnIndex + 1] +
    arr[rowIndex][columnIndex + 2] +
    arr[rowIndex + 1][columnIndex + 1] +
    arr[rowIndex + 2][columnIndex] +
    arr[rowIndex + 2][columnIndex + 1] +
    arr[rowIndex + 2][columnIndex + 2]
  );
}

function sum(arr, columnIndex, rowIndex, total) {
  const size = arr[0].length - 1;
  const rightSize = size - 2;
  const topLeftSum = getHourGlasses(arr, columnIndex, rowIndex);
  const topRightSum = getHourGlasses(arr, rightSize - columnIndex, rowIndex);
  const bottomLeftSum = getHourGlasses(arr, columnIndex, rightSize - rowIndex);
  const bottomRightSum = getHourGlasses(
    arr,
    rightSize - columnIndex,
    rightSize - rowIndex
  );

  if (topLeftSum > total || total == null) {
    total = topLeftSum;
  }

  if (topRightSum > total) {
    total = topRightSum;
  }

  if (bottomLeftSum > total) {
    total = bottomLeftSum;
  }

  if (bottomRightSum > total) {
    total = bottomRightSum;
  }

  const newColumnIndex = columnIndex + 1;
  const newRowIndex = rowIndex + 1;

  if (newColumnIndex < rightSize - newColumnIndex) {
    return sum(arr, newColumnIndex, rowIndex, total);
  } else if (newRowIndex < rightSize - newRowIndex) {
    return sum(arr, 0, newRowIndex, total);
  }

  return total;
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  return sum(arr, 0, 0);
}
