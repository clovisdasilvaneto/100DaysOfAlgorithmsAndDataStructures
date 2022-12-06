const rotateLeft = (arr, rotations) => {
    let rotatedArr = [...arr];

    for (let i = 0; i < rotations; i++) {
        rotatedArr.push(arr[i]);
    }

    rotatedArr.splice(0, rotations);

    return rotatedArr;
}

const input = [1, 2, 3, 4, 5]
console.log(`Input: ${input} \n`)
console.log(`Output: ${rotateLeft(input, 4)}`)