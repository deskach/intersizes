// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function createString(count, char) {
  let results = ''
  
  for (let i = 0; i < count; i++) {
    results += char
  }
  
  return results
}

function steps(n, len) {
  if (n === 0) {
    return
  }
  
  steps(n - 1, len === undefined ? n : len)
  console.log(createString(n, '#') + createString(len - n, ' '))
}

module.exports = steps;
