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

  findLastLeftNode(node) {
    if (node.left.left) {
      return this.findLastLeftChild(node.left);
    }

    return node;
  }

  remove(value, parentNode) {
    if (this.data === value) {
      if (!parentNode) {
        this.data = null;
      } else if (!this.right && !this.left) {
        if (parentNode.left.data === value) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else if (!this.right) {
        this.data = this.left.data;
        this.left = this.left.left;
      } else if (this.right.left) {
        const lastLeftNode = this.findLastLeftNode(this.right);

        this.data = lastLeftNode.left;
        lastLeftNode.left = lastLeftNode.left.right;
      } else {
        this.data = this.right.data;
        this.right = this.right.right;
      }
    } else if (value < this.data) {
      this.left.remove(value, this);
    } else {
      this.right.remove(value, this);
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

  inOrder() {
    if (this.left) {
      this.left.inOrder();
    }
    console.log(this.data);
    if (this.right) {
      this.right.inOrder();
    }
  }

  preOrder() {
    console.log(this.data);
    if (this.left) {
      this.left.inOrder();
    }
    if (this.right) {
      this.right.inOrder();
    }
  }

  postOrder() {
    if (this.left) {
      this.left.inOrder();
    }
    if (this.right) {
      this.right.inOrder();
    }
    console.log(this.data);
  }
}

const binaryTree = new Tree(20);
binaryTree.insert(7);
binaryTree.insert(30);
binaryTree.insert(24);
binaryTree.insert(21);
binaryTree.insert(25);
binaryTree.insert(22);
binaryTree.insert(2);
binaryTree.insert(8);
// binaryTree.inOrder();
// binaryTree.postOrder();
// binaryTree.preOrder();
binaryTree.remove(7);
// binaryTree.remove(24);
binaryTree.remove(30);
binaryTree.remove(2);
binaryTree.inOrder();
