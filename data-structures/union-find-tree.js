const conexions = [1, 2, 3, 4, 5, 6, 7, 8];

class Tail {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChildren(tail) {
    this.children.push(tail);
  }
}

const connect = entries => {
  const tree = [];
  let i = 0;

  while (entries[i]) {
    if (entries[i] instanceof Tail == false) {
      entries[i] = new Tail(entries[i]);

      if (entries[i + 1]) {
        entries[i + 1] = new Tail(entries[i + 1]);
      }
    }

    if (entries[i + 1]) {
      entries[i].addChildren(entries[i + 1]);
    }

    tree.push(entries[i]);

    i += 2;
  }

  if (entries.length > 1) {
    return connect(tree);
  }

  return tree;
};

console.log(connect(conexions));
