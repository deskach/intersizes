//TODO: Create a funnel
class Funnel {
  constructor(...items) {
    this.height = 5
    this.items = [...items]
  }
  
  fill(...newItems) {
    this.items = [...this.items, ...newItems]
  }
  
  drip() {
    return this.items.shift()
  }
  
  getRows() {
    let rows = []
    
    for (let i = 1; i <= this.height; i++) {
      let row = []
      
      for (let j = 0; j < i; j++) {
        const itemIdx = (i - 1) / 2 * i + j
        const item = this.items.length > itemIdx ? this.items[itemIdx] : ' '
        
        row.push(item)
      }
      
      rows.unshift(row)
    }
    
    return rows
  }
  
  toString() {
    const rows = this.getRows()
    let strings = []
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      let s = ''
      
      for (let j = 0; j < i; j++) {
        s += ' '
      }
      
      strings.push(s + `\\${row.join(' ')}/`)
    }
    
    return strings.join('\n')
  }
}

//Human readable duration format
// the duration is expressed as a combination of Years, Days, Hours, Minutes and Seconds.
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
function formatDuration(seconds) {
  if (seconds > 0) {
    const unitDescriptors = [
      {
        name: 'year',
        power: 60 * 60 * 24 * 365
      },
      {
        name: 'day',
        power: 60 * 60 * 24
      },
      {
        name: 'hour',
        power: 60 * 60
      },
      {
        name: 'minute',
        power: 60
      },
      {
        name: 'second',
        power: 1
      }
    ]
    const units = []
    
    for (let d of unitDescriptors) {
      let value = (seconds - seconds % d.power) / d.power
      
      units.push({name: value > 1 ? `${d.name}s` : d.name, value})
      seconds = seconds - value * d.power
    }
    
    let activeUnits = units.filter(u => u.value > 0)
    const unit2string = u => `${u.value} ${u.name}`
    
    if (activeUnits.length === 1) {
      return unit2string(activeUnits[0])
    } else {
      const rest = activeUnits.map(unit2string)
      
      return rest.join(", ").replace(/,([^,]*)$/, " and$1")
    }
  }
  
  return 'now'
}

/* Catching Car Mileage Numbers
  Any digit followed by all zeros: 100, 90000
  Every digit is the same number: 1111
  The digits are sequential, incementing†: 1234
  The digits are sequential, decrementing‡: 4321
  The digits are a palindrome: 1221 or 73837
  The digits match one of the values in the awesomePhrases array
  † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
  ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
 */
function isInteresting(number, awesomePhrases, depth = 0) {
  const s = String(number)
  
  if (depth > 1) {
    return 0
  }
  
  if (s.length > 2) {
    if (awesomePhrases.includes(number)) {
      return 2
    }
  
    if (s.substr(1, s.length - 1).match(/^0+$/g)) {
      return 2
    }
  
    if ((new Set(s)).size === 1) {
      return 2
    }
  
    if (s === s.split('').reverse().join('')) {
      return 2
    }
  
    if ('1234567890'.indexOf(s) > -1) {
      return 2
    }
  
    if ('9876543210'.indexOf(s) > -1) {
      return 2
    }
  }
  
  return Math.max(
    isInteresting(number + 1, awesomePhrases, depth + 1) - 1,
    isInteresting(number + 2, awesomePhrases, depth + 1) - 1,
    0
  )
}

module.exports = {Funnel, formatDuration, isInteresting}