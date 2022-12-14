const input = [2, 6, 1, 4, 8, 3, 13, 123, 34, 1234, 11, 10];

const sellectionSort = (arr) => {
    const sortedArr = [...arr];

    for(let i = 0; i < sortedArr.length; i++) {
        let minValueIndex = i;

        for (let j = i; j < sortedArr.length; j++) {
            if(sortedArr[j] < sortedArr[minValueIndex]) minValueIndex = j;
        }
        
        let oldValue = sortedArr[minValueIndex];
        sortedArr[minValueIndex] = sortedArr[i];
        sortedArr[i] = oldValue;
    }

    return sortedArr;
}

const sort = sellectionSort(input);
console.log(`Sorted arr: ${sort}`)