const LinkedList = require("../linked-list/linked-list");

class HashTable {
  constructor() {
    const limit = (this.limit = 5);
    this.storage = new Array(limit);
  }

  hash(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % this.limit;
  }

  add(key, value) {
    const position = this.hash(key);

    if (!this.storage[position]) {
      this.storage[position] = new LinkedList();
    }

    if (this.updateBucket(this.storage[position].head, key, value)) return;

    return this.storage[position].append([key, value]);
  }

  updateBucket(bucket, key, value) {
    if (!bucket) return;

    if (bucket.data[0] === key) {
      return (bucket.data[1] = value);
    }

    return this.updateBucket(bucket.next, key, value);
  }

  removeFromBucket(bucket, key) {
    if (!bucket.data) return;

    if (bucket.next.data[0] === key) {
      return (bucket.next = bucket.next.next);
    }

    return this.removeFromBucket(bucket.next, key);
  }

  lookup(key) {
    const position = this.hash(key);

    if (!this.storage[position]) return;

    let current = this.storage[position].head;

    while (current.next) {
      if (current.data[0] === key) {
        break;
      }

      current = current.next;
    }

    return current.data[0] === key && current.data;
  }

  remove(key) {
    const position = this.hash(key);

    if (!this.storage[position]) return;

    const bucket = this.storage[position];

    if (bucket.head.data[0] === key) {
      bucket.head = bucket.head.next;

      return;
    }

    this.removeFromBucket(bucket.head, key);
  }
}

// const myHashTable = new HashTable();
// myHashTable.add("apelido", "nevinha");
// myHashTable.add("nome", "Clóvis Neto");
// myHashTable.add("idade", "24");
// myHashTable.add("github", "clovisdasilvaneto");
// myHashTable.add("idaade", "aaaa");
// myHashTable.add("idaaade", "aaaa");
// myHashTable.add("idaaaade", "aaaa");
// myHashTable.add("idaaaaade", "aaaa");
// myHashTable.add("idaaaaaade", "aaaa");
// myHashTable.add("github", "nevinha");
// myHashTable.remove("github");
// console.log(myHashTable.storage[3]);
