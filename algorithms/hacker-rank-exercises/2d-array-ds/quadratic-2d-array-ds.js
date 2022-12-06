const input = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

const getMax2DSum = (arr2D) => {
    let maxSum;

    for (let i = 0; i < arr2D.length - 2; i++) {
        for (let j = 1; j < arr2D[i].length - 1; j++) {
            const leftTop = arr2D[i][j - 1];
            const middleTop = arr2D[i][j];
            const rightTop = arr2D[i][j + 1];

            const middle = arr2D[i + 1][j];

            const leftBottom = arr2D[i + 2][j - 1];
            const middleBottom = arr2D[i + 2][j];
            const rightBottom = arr2D[i + 2][j + 1];

            let sum = leftTop + middleTop + rightTop + middle + leftBottom + middleBottom + rightBottom;

            if (maxSum === undefined || maxSum < sum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}

console.log(getMax2DSum(input))