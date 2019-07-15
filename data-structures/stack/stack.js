const Node = require("../Node");

class Stack {
  isEmpty() {
    return !this.top;
  }

  peek() {
    return this.top.data;
  }

  add(data) {
    const node = new Node(data);

    if (!this.top) {
      this.top = node;
    } else if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  remove(current) {
    if (this.top.data === this.tail.data) {
      const data = this.top.data;
      [this.top, this.tail] = [null, null];

      return data;
    }

    if (!current) {
      current = this.top;
    }

    if (current.next.data === this.tail.data) {
      const data = this.tail.data;
      [current.next, this.tail] = [null, current];

      return data;
    }

    current = current.next;
    return this.remove(current);
  }
}

const myStack = new Stack();
myStack.add("teste");
myStack.add("mais um");
myStack.add("nevinha");
myStack.add("a");

console.log(myStack.remove());
console.log(myStack.top);
