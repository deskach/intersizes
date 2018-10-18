// Coloured Triangles
function triangle(row) {
  const matchingColor = (c1, c2) => 'RGB'.split('').filter(c => ![c1, c2].includes(c))
  let results = row
  let nextResults = ''
  
  while (results.length > 1) {
    for(let i = 1; i < results.length; i++) {
      nextResults += results[i - 1] === results[i] ? results[i] : matchingColor(results[i-1], results[i])
    }
    
    results = nextResults
    nextResults = ''
  }
  
  return results
}

module.exports = {triangle}