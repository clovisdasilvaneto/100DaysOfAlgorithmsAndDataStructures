function reverseArray(a) {
  const size = a.length - 1;

  for (let i = size; i >= size / 2; i--) {
    const original = a[i];
    a[i] = a[size - i];
    a[size - i] = original;
  }

  return a;
}

return reverseArray([1, 2, 3, 4]);
