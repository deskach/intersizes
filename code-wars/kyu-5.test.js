const {sqInRect, dirReduc} = require('./kyu-5')

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