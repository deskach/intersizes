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

module.exports = {Funnel}