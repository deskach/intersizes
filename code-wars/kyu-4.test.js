const {Funnel, formatDuration} = require('./kyu-4')

describe("Funnel Tests", () => {
  it("It should works for basic tests.", () => {
    const funnel = new Funnel();
    let now =`\\         /
 \\       /
  \\     /
   \\   /
    \\ /`
    console.log("Now the funnel is:\n" + now)
    expect(funnel.toString()).toEqual(now)
    
    funnel.fill(1, 2, 3)
    now =` \\         /
 \\       /
  \\     /
   \\2 3/
    \\1/`
    console.log("Now the funnel is:\n" + now)
    expect(funnel.toString()).toEqual(now)
    
    let tmp = funnel.drip()
    now = `\\         /
 \\       /
  \\     /
   \\  3/
    \\2/`
    console.log("Now the funnel is:\n" + now)
    expect(tmp).toEqual(1)
    expect(funnel.toString()).toEqual(now)
    
    funnel.fill(4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7)
    now =`\\2 3 4 5 6/
 \\8 9 0 1/
  \\5 6 7/
   \\4 3/
    \\2/`
    console.log("Now the funnel is:\n" + now)
    expect(funnel.toString()).toEqual(now)
  })
  
  it('accepts up to 15 items', () => {
    const funnel = new Funnel();
    funnel.fill(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5)
    now =`\\1 2 3 4 5/
 \\7 8 9 0/
  \\4 5 6/
   \\2 3/
    \\1/`
    console.log("Now the funnel is:\n" + now)
    expect(funnel.toString()).toEqual(now)
  })
  
  it('drip() values', () => {
    const funnel = new Funnel();
    
    funnel.fill(1, 2, 3)
    
    let tmp = funnel.drip()
    let now = `\\         /
 \\       /
  \\     /
   \\  3/
    \\2/`
    
    console.log("Now the funnel is:\n" + now)
    
    expect(tmp).toEqual(1)
    expect(funnel.toString()).toEqual(now)
  })
  
  it('fill(1, 2, 3)', () => {
    const funnel = new Funnel();
    
    funnel.fill(1, 2, 3)
    let now =`\\         /
 \\       /
  \\     /
   \\2 3/
    \\1/`
    console.log("Now the funnel is:\n" + now)
    expect(funnel.toString()).toEqual(now)
  
  })
  
  it('is empty when created', () => {
    const funnel = new Funnel();
    let now =`\\         /
 \\       /
  \\     /
   \\   /
    \\ /`
    console.log("Now the funnel is:\n" + now)
    expect(funnel.toString()).toEqual(now)
  })
})


describe('formatDuration ', () => {
  it('Base tests', () => {
    expect(formatDuration(1)).toEqual("1 second")
    expect(formatDuration(62)).toEqual("1 minute and 2 seconds")
    expect(formatDuration(120)).toEqual("2 minutes")
    expect(formatDuration(3600)).toEqual("1 hour")
    expect(formatDuration(3662)).toEqual("1 hour, 1 minute and 2 seconds")
  })

  it('single test', () => {
    expect(formatDuration(62)).toEqual("1 minute and 2 seconds")
  })
  
  it('now', () => {
    expect(formatDuration(0)).toEqual("now")
  })
})

