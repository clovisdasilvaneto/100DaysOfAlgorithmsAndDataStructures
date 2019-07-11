//Original input
const a = [2, 1, 6, 4, 8, 3, 13, 123, 34, 1234, 11, 10];

/***
 * Follow this code rules
 * i -- Current
 * i * 2 -- Left Child
 * (i * 2) + 1 -- Right Child
 * i / 2 -- Parent
 */

function heapSort() {
  //just to not mutate `a`
  const sort = [...a];
  const heap = [null];

  this.add = value => {
    heap.push(value);

    if (heap.length > 2) {
      let index = heap.length - 1;
      while (heap[index] < heap[Math.floor(index / 2)]) {
        [heap[index], heap[Math.floor(index / 2)]] = [
          heap[Math.floor(index / 2)],
          heap[index]
        ];

        index = index / 2;
      }
    }
  };

  this.remove = () => {
    smallest = heap[1];

    if (heap.length > 2) {
      let index = 1;

      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1, 1);

      while (
        (heap[index * 2] && heap[index] > heap[index * 2]) ||
        (heap[index * 2 + 1] && heap[index] > heap[index * 2 + 1])
      ) {
        if (heap[index * 2] > heap[index * 2 + 1]) {
          [heap[index * 2 + 1], heap[index]] = [
            heap[index],
            heap[index * 2 + 1]
          ];
          index = index * 2 + 1;
        } else {
          [heap[index * 2], heap[index]] = [heap[index], heap[index * 2]];
          index = index * 2;
        }
      }
    } else if (heap.length == 1) {
      heap.splice(1, 1);
    }

    return smallest;
  };

  this.sort = () => {
    const sortStartTime = performance.now();

    sort.map(this.add);
    const heapSort = sort.map(this.remove);

    const sortEndTime = performance.now();

    document.querySelector("#result").innerHTML = `
      output: [${heapSort}] the operation took <b>${(
      sortEndTime - sortStartTime
    ).toFixed(4)} milliseconds </b>
      <br />
      Time complexty: O(log2n) - linear
    `;
  };

  this.sort();
}

document.querySelector("button").addEventListener("click", heapSort);
