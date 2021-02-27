const LinkedList = () => {
  let head;
  let tail;

  const createNode = (value) => {
    return {
      value,
      next: {},
    };
  };

  const initializeList = (node) => {
    head = node;
    tail = head;
  };

  const addNode = (value) => {
    const node = createNode(value);

    if (!head) {
      initializeList(node);
      return;
    }

    tail.next = node;
    tail = tail.next;
  };

  const prependNode = (value) => {
    const node = createNode(value);

    if (!head) {
      initializeList(node);
      return;
    }

    node.next = head;
    head = node;
  };

  const search = (value) => {
    let current = head || {};
    let result;

    while (!result && current) {
      if (current.value === value) {
        result = value;
      }

      current = current.next;
    }

    return result;
  };

  const traverse = (cb) => {
    let current = head || {};

    while (current.value) {
      if (cb) cb(current);

      current = current.next;
    }
  };

  const reverseTraversal = () => {
    if (!tail) return;

    let current = tail.value;

    while (current !== head.value) {
      let prev = head;

      while (prev.next.value !== current) {
        prev = prev.next;
      }

      current = prev.value;
    }
  };

  const getList = () => {
    return { head, tail };
  };

  return {
    search,
    getList,
    addNode,
    prependNode,
    traverse,
    reverseTraversal,
  };
};

const list = LinkedList();

list.addNode(1);
list.addNode(2);

console.log(list.getList());

console.log("---------- PREPEND ---------");

list.prependNode(3);

list.traverse((item) => {
  console.log("the traversed node is", item);
});
console.log(list.search(2));

console.log("list:", list.getList());
console.log(
  "is the same tail? ",
  list.getList().head.next.next.value === list.getList().tail.value
);

list.reverseTraversal();
