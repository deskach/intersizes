/*
# Once upon a time, on a way through the old wild west,…

… a man was given directions to go from one point to another.
The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite,
 "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort.
  Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy,
   otherwise you might die of thirst!

How I crossed the desert the smart way.
The directions given to the man are, for example, the following:

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or

{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or (haskell)

[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place!
 So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or

{ "WEST" }
or (haskell)

[West]
or (rust)

[WEST];
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
 What a waste of time! Better to do nothing.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is []
 (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they
 become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless
 directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
 The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of
  enum Direction {NORTH, SOUTH, EAST, WEST}.

Examples
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
See more examples in "Example Tests"

Note
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible.
 "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't
  become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
 */

function dirReduc(arr) {
  let initial = [...arr]
  let reduced = []
  
  if (initial.length > 0) {
    const N = 'NORTH'
    const S = 'SOUTH'
    const E = 'EAST'
    const W = 'WEST'
    
    const isOrtogonal = (a1, a2) => {
      const opposites = {
        [N]: S,
        [S]: N,
        [E]: W,
        [W]: E,
      }
      
      return opposites[a1] === a2
    }
    
    while (reduced.length !== initial.length) {
      reduced = []
      
      for (let i = 0; i < initial.length; i++) {
        const prev = reduced.length > 0 ? reduced[reduced.length - 1] : undefined
        const curr = initial[i]
        
        if (prev !== undefined && isOrtogonal(prev, curr)) {
          reduced.pop()
        } else {
          reduced.push(curr)
        }
      }
      
      let tmp = [...initial]
      initial = [...reduced]
      reduced = [...tmp]
    }
  }
  
  return reduced
}

// Product of consecutive Fib numbers
function productFib(prod) {
  let fibs = [0, 1]
  
  while (fibs[0] * fibs[1] < prod) {
    fibs = [fibs[1], fibs[0] + fibs[1]]
  }
  
  return [fibs[0], fibs[1], fibs[0] * fibs[1] === prod]
}

function sqInRect(lng, wdth) {
  if (lng !== wdth) {
    const results = []
    
    while (lng > 0) {
      const side = Math.min(lng, wdth)
      
      results.push(side)
      lng = Math.max(lng, wdth) - side
      wdth = side
    }
    
    return results
  }
  
  return null
}

// Double cola
function whoIsNext(names, r) {
  if (r < names.length) {
    return names[r - 1]
  } else {
    let i = 1
    let prevSteps = 0
    let steps = names.length
    
    while (steps < r) {
      prevSteps = steps
      steps += names.length * Math.pow(2, i)
      i++
    }
    
    let rem = r - prevSteps
    let k = rem % Math.pow(2, i - 1)
    let idx = (rem - k) / Math.pow(2, i - 1)
    
    if (k > 0) {
      idx += 1
    }
    
    return names[idx - 1]
  }
}

// Diophantine Equation x^2 - 4 * y^2 = n
// solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
// solEquaStr(90002) --> "[]"
function solequa(n) {
  // (x - 2y)*(x + 2y) = n
  const findDividers = (n) => {
    const results = []
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (Number.isInteger(n / i)) {
        results.push([i, n / i])
      }
    }
    
    return results
  }
  
  const solve = (m1, m2) => {
    // {x - 2y = m1; x + 2y = m2;} => {x = m1 + 2y; 4y = m2 - m1} => {x = (m1 + m2)/2; y = (m2 - m1)/4}
    const y = (m1 + m2) / 2
    const x = (m2 - m1) / 4
    
    if (Number.isInteger(x) && Number.isInteger(y)) {
      return (x > y) ? [x, y] : [y, x]
    }
    
    return null
  }
  
  const dividers = findDividers(n)
  const solutions = dividers.map(([d1, d2]) => solve(d1, d2)).filter(s => s !== null)
  
  return solutions
}


/* Shuffle It Up TODO: find a more efficient solution
A special kind of permutation is the one that has all of its elements in a different position than the original.
The task for this kata would be to create a code to count all these permutations for an array of certain length.
[1 2 3]
(2 3 1)
(3 1 2)
*/
function all_permuted(array_length, solutions = {1: 0, 2: 1}) {
  function od_permuted(od_array_length, od_solutions = {1: 1, 2: 1}) {
    if (!od_solutions.hasOwnProperty(od_array_length)) {
      od_solutions[od_array_length] = all_permuted(od_array_length - 1, solutions)
        + (od_array_length - 1) * od_permuted(od_array_length - 1, od_solutions)
    }

    return od_solutions[od_array_length]
  }

  if (!solutions.hasOwnProperty(array_length)) {
    solutions[array_length] = (array_length - 1) * od_permuted(array_length - 1)
  }

  return solutions[array_length]
}

module.exports = {sqInRect, dirReduc, productFib, solequa, whoIsNext, all_permuted}
