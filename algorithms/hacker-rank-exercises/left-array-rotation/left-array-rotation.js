function rotLeft(a, d) {
  //could be solved by using simply: a.concat(a.splice(0, d))
  const rotated = [];
  for (let i = d; i < a.length; i++) {
    rotated[rotated.length] = a[i];
  }

  for (let i = 0; i < d; i++) {
    rotated[rotated.length] = a[i];
  }

  return rotated;
}
