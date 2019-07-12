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

const MyList = new LinkedList();
MyList.append("teste");
MyList.append("mais um");
MyList.prepend("Head");
MyList.remove("Head");
console.log(MyList.head);
