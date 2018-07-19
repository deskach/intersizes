// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function createMatrix(n, m) {
  const matrix = []
  
  for (let i = 0; i < n; i++) {
    matrix.push([])
    
    for(let j = 0; j < m; j++) {
      matrix[i].push(undefined)
    }
  }
  
  return matrix
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
  }
}


// direction: -1 | +1
function fillRow(matrix, counter, pos, direction) {
  const {row, col} = pos
  let i = col
  
  while(i < matrix[row].length && i >= 0 && isNaN(matrix[row][i])) {
    matrix[row][i] = counter
    counter++
    pos.col = i
    i = i + direction
  }
  
  return counter
}

function fillCol(matrix, counter, pos, direction) {
  const {row, col} = pos
  let i = row
  
  while(i < matrix.length && i >= 0 && isNaN(matrix[i][col])) {
    matrix[i][col] = counter
    counter++
    pos.row = i
    i = i + direction
  }
  
  return counter
}

function matrix(n) {
  let pos = {row: 0, col: 0};
  let counter = 1;
  const aMatrix = createMatrix(n, n)
  
  while (counter <= n * n) {
    counter = fillRow(aMatrix, counter, pos, +1)
    pos.row += 1
    counter = fillCol(aMatrix, counter, pos, +1)
    pos.col -= 1
    counter = fillRow(aMatrix, counter, pos, -1)
    pos.row -= 1
    counter = fillCol(aMatrix, counter, pos, -1)
    pos.col += 1
  }
  
  return aMatrix
}

module.exports = matrix;
