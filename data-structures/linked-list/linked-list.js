const Node = require("../Node");

class LinkedList {
  append(data) {
    if (!this.head) {
      return (this.head = new Node(data));
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data);
  }

  prepend(data) {
    if (!this.head) {
      return (this.head = new Node(data));
    }

    let newHead = new Node(data);
    newHead.next = this.head;

    this.head = newHead;
  }

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      return (this.head = this.head.next);
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        break;
      }
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append("teste");
list.append("mais um");
list.prepend("Head");
list.remove("Head");
console.log(list.head);
