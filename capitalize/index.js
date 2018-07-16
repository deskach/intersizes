// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = str.split(' ');
  const aCode = 'a'.charCodeAt(0)
  const zCode = 'z'.charCodeAt(0)
  const diff = aCode - 'A'.charCodeAt(0);
  
  for(let i = 0; i < words.length; i++) {
    const code = words[i].charCodeAt(0)
    
    if (code >= aCode && code <= zCode) {
      const letters = words[i].split('')
      
      letters[0] = String.fromCharCode(code - diff)
      
      words[i] = letters.join('')
    }
  }
  
  return words.join(' ')
}

module.exports = capitalize;
