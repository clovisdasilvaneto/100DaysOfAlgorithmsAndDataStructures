function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);

    for (let query of queries) {
        let [a, b, k] = query;
        arr[a - 1] += k;
        arr[b] -= k;
    }

    let max = 0;
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}

let input = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
]


arrayManipulation(5, input)