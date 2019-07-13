const Node = require("../Node");

class Queue {
  isEmpty() {
    return !this.head;
  }

  peek() {
    return this.head.data;
  }

  add(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  remove() {
    const data = this.head.data;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return data;
  }
}

const myQueue = new Queue();
myQueue.add("teste");
myQueue.add("mais um");
myQueue.add("nao minta");
myQueue.add("a");
myQueue.remove();
myQueue.remove();
console.log(myQueue.head);
