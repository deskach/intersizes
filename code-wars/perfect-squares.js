/*
The task is simply stated. Given an integer n (3 < n < 10^9), find the length of the smallest list of perfect squares
which add up to n. Come up with the best algorithm you can; you'll need it!

Examples:

sum_of_squares(17) = 2
17 = 16 + 1 (4 and 1 are perfect squares).
sum_of_squares(15) = 4
15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares.
sum_of_squares(16) = 1
16 itself is a perfect square.

 */

function sumOfSquares0(n) {
  let res = n // Maximum squares required is n (1*1 + 1*1 + ..)
  
  // Go through all smaller numbers to recursively find minimum
  if (n > 3) {
    for (let x = 1; x <= n; x++) {
      let temp = x * x
      
      if (temp > n)
        break
      else
        res = Math.min(res, 1 + sumOfSquares(n - temp))
    }
  }
  
  return res
}

function sumOfSquares(n) {
  if (sumOfSquares.dp === undefined) {
    sumOfSquares.dp = {
      0: 0,
      1: 1,
      2: 2,
      3: 3
    }
  }
  
  // Go through all smaller numbers to recursively find minimum
  for (let i = 4; i <= n; i++) {
    if (sumOfSquares.dp[i] === undefined) {
      sumOfSquares.dp[i] = n // Maximum squares required is n (1*1 + 1*1 + ...)
  
      for (let x = 1; x <= i; x++) {
        let temp = x * x
    
        if (temp > i)
          break
        else {
          sumOfSquares.dp[i] = Math.min(sumOfSquares.dp[i], 1 + sumOfSquares.dp[i - temp])
        }
      }
    }
  }
  
  return sumOfSquares.dp[n]
}

// console.log(sumOfSquares(8))

function sumOfSquares2(n) {
  let res = n // Maximum squares required is n (1*1 + 1*1 + ..)
  
  // Go through all smaller numbers to recursively find minimum
  if (n > 3) {
    for (let x = Math.floor(Math.sqrt(n)); x > 1; x--) {
      let temp = x * x
      
      res = Math.min(res, 1 + sumOfSquares2(n - temp))
    }
  }
  
  return res
}

function sumOfSquares3(n, res = n) {
  // Go through all smaller numbers to recursively find minimum
  if (n <= 3) {
    return n
  }
  
  for (let x = Math.floor(Math.sqrt(n)); x > 1; x--) {
    let newRes = 1 + sumOfSquares3(n - x * x, res)
    
    if (newRes > res + 1) {
      break
    } else {
      res = Math.min(newRes, res)
    }
  }
  
  return res
}

module.exports = {sumOfSquares}

// describe("Solution", () => {
//   it("Base tests", () => {
//     Test.assertEquals(sumOfSquares(15), 4)
//     Test.assertEquals(sumOfSquares(16), 1)
//     Test.assertEquals(sumOfSquares(17), 2)
//     Test.assertEquals(sumOfSquares(18), 2)
//     Test.assertEquals(sumOfSquares(19), 3)
//   });
// });
