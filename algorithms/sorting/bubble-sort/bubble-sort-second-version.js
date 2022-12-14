const input = [2, 6, 1, 4, 8, 3, 13, 123, 34, 1234, 11, 10];

const bubbleSort = (arr) => {
    let sortedArr = [...arr];

    for (let i = sortedArr.length - 1; i >= 0; i--) {
        let stopPoint = (sortedArr.length - 1) - i;

        for (j = sortedArr.length - 1; j >= stopPoint; j--) {
            if (j > 0 && sortedArr[j] < sortedArr[j - 1]) {
                let min = sortedArr[j];

                sortedArr[j] = sortedArr[j - 1];
                sortedArr[j - 1] = min;
            }
        }
    }

    return sortedArr;
}

const sort = bubbleSort(input)
console.log(`sorted array: ${sort}`)
