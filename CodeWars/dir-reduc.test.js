const {dirReduc} = require('./dir-reduc')

describe('Testing with [1, 3, 4]', () => {
  it('Base tests', () => {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"]);
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])).toEqual([]);
  });
  
  it('single test', () => {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])).toEqual([]);
  })
});
