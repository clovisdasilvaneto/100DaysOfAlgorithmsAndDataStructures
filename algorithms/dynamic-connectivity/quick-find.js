const set = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const connect = (a, b) => {
  const newGroup = set[a];
  const oldGroup = set[b];

  for (let i = 0; i < set.length; i++) {
    if (set[i] === oldGroup) {
      set[i] = newGroup;
    }
  }
};

connect(0, 6);
console.table(set);
