let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < mat.length; i++) {
  let c = 0;
  for (let j = 0; j < mat[i].length; j++) {
    c += mat[i][j];
  }
  console.log(c);
}
