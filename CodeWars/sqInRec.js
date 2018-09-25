function sqInRect(lng, wdth) {
  if (lng !== wdth) {
    const results = [];
    
    while (lng > 0) {
      const side = Math.min(lng, wdth);
      
      results.push(side);
      lng = Math.max(lng, wdth) - side;
      wdth = side;
    }
    
    return results
  }
  
  return null;
}

module.exports = {sqInRect}