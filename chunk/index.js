// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const results = [[]]

  for(let i = 0; i < array.length; i++) {
    if (results[results.length - 1].length === size) {
      results.push([])
    }
    
    results[results.length - 1].push(array[i])
  }

  return results
}

module.exports = chunk;

// function chunk(array, size) {
//   const results = []
//   const chunks = size > 0 ? Math.floor(array.length / size) + 1: 1
//
//   for(let i = 0; i <= chunks; i++) {
//     const chunk = []
//
//     for (let j = 0; (j < size) && (i * size + j < array.length); j++) {
//       chunk.push(array[i * size + j])
//     }
//
//     if (chunk.length > 0) {
//       results.push(chunk)
//     }
//   }
//
//   return results
// }
