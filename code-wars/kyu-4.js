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
    let rows = [];
  
    for(let i = 1; i <= this.height; i++) {
      let row = []
    
      for(let j = 0; j < i; j++) {
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
    
    for(let i = 0; i < rows.length; i++) {
      const row = rows[i]
      let s = ''
      
      for(let j = 0; j < i; j++) {
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
function formatDuration (seconds) {
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
  
    for(let d of unitDescriptors) {
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
    
      return rest.join(", ").replace(/,([^,]*)$/," and$1")
    }
  }
  
  return 'now'
}

module.exports = {Funnel, formatDuration}