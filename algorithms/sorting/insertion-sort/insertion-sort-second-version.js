const input = [2, 6, 1, 4, 8, 3, 13, 123, 34, 1234, 11, 10];

const insertionSort = (arr, pointer = 0) => {
    if(!arr[pointer]) return arr;

    for(let i = pointer; i > 0; i--) {
        if(arr[i] < arr[i - 1]) {
            let old = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = old;
        }else {
            break;
        }
    }

    return insertionSort(arr, pointer + 1);
}

const sort = insertionSort(input);
console.log(`Sorted array ${sort}`);