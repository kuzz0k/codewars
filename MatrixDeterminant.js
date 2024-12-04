function det(matrix) {
  if (matrix[0].length===2) {
    return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0]
  } else if (matrix[0].length===1) {
    return matrix[0][0]
  }
  let sum = 0;
  for(let i = 0; i < matrix[0].length; i++){
    let newMatrix = []
    for(let n = 1; n < matrix[0].length; n++){
      let row = matrix[n]
      row = row.filter((num, index) => index!==i)
      newMatrix.push(row)
    }
    if(i%2===0) {
      sum += matrix[0][i]*det(newMatrix)
    } else {
      sum -= matrix[0][i]*det(newMatrix)
    }
  }
  return sum
}

console.log(det([[1]]))