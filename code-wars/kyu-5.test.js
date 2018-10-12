const {sqInRect, dirReduc, productFib, solequa, whoIsNext, all_permuted} = require('./kyu-5')

describe('dirReduc', () => {
  it('Base tests', () => {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"])
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])).toEqual([])
  })
  
  it('single test', () => {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])).toEqual([])
  })
})

describe('sqInRect', () => {
  it('Base tests', () => {
    expect(sqInRect(5, 5)).toEqual(null)
    expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1])
    expect(sqInRect(3, 5)).toEqual([3, 2, 1, 1])
    expect(sqInRect(20, 14)).toEqual([14, 6, 6, 2, 2, 2])
  })
  
  it('single test', () => {
    expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1])
  })
  
  it('edge cases', () => {
    expect(sqInRect(5, 5)).toEqual(null)
  })
})

describe('productFib', () => {
  it('Base tests', () => {
    expect(productFib(4895)).toEqual([55, 89, true])
    expect(productFib(5895)).toEqual([89, 144, false])
    expect(productFib(74049690)).toEqual([6765, 10946, true])
    expect(productFib(84049690)).toEqual([10946, 17711, false])
    expect(productFib(193864606)).toEqual([10946, 17711, true])
    expect(productFib(447577)).toEqual([610, 987, false])
    expect(productFib(602070)).toEqual([610, 987, true])
  })
  
  it('single test', () => {
    expect(productFib(4895)).toEqual([55, 89, true])
  })
})

describe('solequa', () => {
  it('Base tests', () => {
    expect(solequa(5)).toEqual([[3, 1]])
    expect(solequa(12)).toEqual([[4, 1]])
    expect(solequa(13)).toEqual([[7, 3]])
    expect(solequa(16)).toEqual([[4, 0]])
  })
  
  it('multiple roots', () => {
    expect(solequa(90005)).toEqual([[45003, 22501], [9003, 4499], [981, 467], [309, 37]])
  })
  
  it('edge cases', () => {
    expect(solequa(90002)).toEqual([])
  })
  
  it('single test', () => {
    expect(solequa(16)).toEqual([[4, 0]])
  })
})

describe('whoIsNext', () => {
  it('Base tests', () => {
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)).toEqual("Sheldon")
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)).toEqual("Penny")
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)).toEqual("Leonard")
  })
  
  it('single test', () => {
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 8)).toEqual("Leonard")
  })
  
  it('basic tests', () => {
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 2)).toEqual("Leonard")
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 6)).toEqual("Sheldon")
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7)).toEqual("Sheldon")
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 8)).toEqual("Leonard")
  })
  
  it('edge cases', () => {
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)).toEqual("Sheldon")
  })
})

describe('all_permuted', () => {
  it('Base tests', () => {
    expect(all_permuted(1)).toEqual(0)
    expect(all_permuted(2)).toEqual(1)
    expect(all_permuted(3)).toEqual(2)
    expect(all_permuted(4)).toEqual(9)
  })
  
  it('single test', () => {
    expect(all_permuted(30)).toEqual(97581073836835777732377428235481)
  })
  
  it('edge cases', () => {
    expect(all_permuted(1)).toEqual(0)
  })
})
