const Node = require("../Node");

class DoublyLinkedList {
  append(data) {
    if (!this.head) {
      return (this.head = new Node(data));
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data);
    current.next.previous = current;
  }

  prepend(data) {
    if (!this.head) {
      return (this.head = new Node(data));
    }

    let newHead = new Node(data);
    newHead.next = this.head;
    newHead.next.previous = newHead;

    this.head = newHead;
  }

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.head.previous = null;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;

        if (current.next) {
          current.next.previous = current;
        }

        break;
      }
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();
list.append("teste");
list.append("mais um");
list.prepend("Head");
list.remove("teste");
console.log(list.head);
