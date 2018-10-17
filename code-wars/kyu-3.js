/*
The boolean order
In this Kata, you will be given boolean values and boolean operators.
Your task will be to return the number of arrangements that evaluate to True.

t,f will stand for true, false and the operators will be Boolean AND (&), OR (|), and XOR (^).

For example, solve("tft","^&") = 2, as follows:

"((t ^ f) & t)" = True
"(t ^ (f & t))" = True
Notice that the order of the boolean values and operators does not change. What changes is the position of braces.
 */
function solve(s, ops) {
  const solve2 = (ch1, ch2, op) => {
    switch (op) {
      case '&':
        return ch1 === 't' && ch2 === 't' ? 't': 'f'
      case '|':
        return ch1 === 't' || ch2 === 't' ? 't': 'f'
      case '^':
        return 'tf'.includes(ch1) && 'tf'.includes(ch2) ? 't': 'f'
    }
  }
  
  if (s.length === 2) {
    return
  }
}

module.exports = {solve}
