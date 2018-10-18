//TODO: Insane Coloured Triangles
function triangle(row) {
  const values = {'R': 0, 'G': 1, 'B': 2}
  let numbers = row.split('').map(c => values[c])
  let sum = 0
  
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(3, i)*numbers[numbers.length - i - 1]
  }
}

module.exports = {triangle}