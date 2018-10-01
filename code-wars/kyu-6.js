function findMissing(list) {
  /*
  # Find the missing term in an Arithmetic Progression
  
  An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms
  of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is
  however one hitch: exactly one term from the original series is missing from the set of numbers which have been
  given to you. The rest of the given series is the same as the original AP. Find the missing term.
  
  You have to write the function findMissing(list), list will always be at least 3 numbers.
  The missing term will never be the first or last one.
  
  Example
  findMissing([1, 3, 5, 9, 11]) == 7
  ```
  
  PS: This is a sample question of the facebook engineer challenge on interviewstreet.
  I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
   */

  const arSum = (list.length + 1) * (list[0] + list[list.length - 1]) / 2
  const listSum = list.reduce((sum, value) => {
    return sum + value
  }, 0)
  
  return arSum - listSum
}

function findShort(s){
  const words = s.split(' ');
  const lengthes = words.map(w => w.length);
  
  return Math.min(...lengthes);
}

function reverseLetter(str) {
  return str.replace(/[\W\d_]/gi, '').split('').reverse().join('');
}

function array_diff(a, b) {
  return a.filter(item => !b.includes(item))
}

function shortestArrang(n) {
  // (x + x + m)*(m + 1)/2 = n => (2x+m)*(m+1)/2 = n => m^2 + 2xm + 2x + m = 2*n => x = (2*n - m - m^2)/(2m + 2)
  const evalX = (m) => (2*n - m - m*m)/(2*m + 2)
  
  for(let m = 1, x = evalX(m); (x > 0) && (x < n); m++, x = evalX(m)) {
    if (Math.floor(x) === Math.ceil(x)) {
      const results = [];
      
      for (let i = x + m; i >= x; i--) {
        results.push(i)
      }
      
      return results
    }
  }
  
  return [-1];
}

module.exports = {findMissing, reverseLetter, findShort, array_diff, shortestArrang}