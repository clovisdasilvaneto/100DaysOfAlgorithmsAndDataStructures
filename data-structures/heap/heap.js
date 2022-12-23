/***
 * Follow this code rules
 * i -- Current
 * i * 2 -- Left Child
 * (i * 2) + 1 -- Right Child
 * i / 2 -- Parent
 */

const createHeap = () => {
    const heap = [null];

    let getParent = (index) => heap[Math.floor(index / 2)]

    const addChild = (value) => {
        heap.push(value);

        if (heap.length < 2) return;

        let index = heap.length - 1

        while (heap[index] < getParent(index)) {
            let old = heap[index];

            heap[index] = getParent(index);
            heap[Math.floor(index / 2)] = old;

            index = index / 2;
        }
    }

    const getValue = () => heap

    const removeValue = () => {
        let smallest = heap[1];

        let index = 1;
        heap[index] = heap[heap.length - 1];
        heap.splice(heap.length - 1, 1);


        while ((heap[index * 2] && heap[index * 2] < heap[index]) ||
            (heap[(index * 2) + 1] && heap[(index * 2) + 1] < heap[index])) {

            if (heap[index * 2] < heap[(index * 2) + 1]) {
                let old = heap[index];

                heap[index] = heap[index * 2]
                heap[index * 2] = old;

                index = index * 2;
            } else {
                let old = heap[index];

                heap[index] = heap[(index * 2) + 1]
                heap[(index * 2) + 1] = old;

                index = (index * 2) + 1;
            }
        }

        return smallest;
    }

    return {
        addChild,
        getValue,
        removeValue
    }
}

let heap = createHeap();

heap.addChild(1);
heap.addChild(20);
heap.addChild(10);
heap.addChild(3);
heap.addChild(4);
heap.addChild(5);
heap.addChild(11);
heap.addChild(2);

while (heap.getValue()[heap.getValue().length - 1] !== null) {
    sorted.push(heap.removeValue())
}

console.log(sorted)