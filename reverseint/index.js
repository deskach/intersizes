// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString()
  const mul = n >= 0 ? 1 : -1
  const rStr = str.split('').reverse().join('')
  const int = parseInt(rStr)
  
  return mul * int
}

module.exports = reverseInt;
