class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (typeof value === "number") {
      value = new Tree(value);
    }

    if (value.data <= this.data) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = value;
      }
    } else if (this.right) {
      this.right.insert(value);
    } else {
      this.right = value;
    }
  }

  contains(value) {
    if (value === this.data) {
      return true;
    } else if (value < this.data && this.left) {
      return this.left.contains(value);
    } else if (value > this.data && this.right) {
      return this.right.contains(value);
    }

    return false;
  }
}

const binaryTree = new Tree(10);
binaryTree.insert(7);
binaryTree.insert(11);
binaryTree.insert(2);
binaryTree.insert(8);
console.log(binaryTree.contains(11));
