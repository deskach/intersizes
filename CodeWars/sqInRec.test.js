const {sqInRect} = require('./sqInRec')

describe('Testing with [1, 3, 4]', () => {
  it('Base tests', () => {
    expect(sqInRect(5, 5)).toEqual(null);
    expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1]);
    expect(sqInRect(3, 5)).toEqual([3, 2, 1, 1]);
    expect(sqInRect(20, 14)).toEqual([14, 6, 6, 2, 2, 2]);
  });
  
  it('single test', () => {
    expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1]);
  })
  
  it('edge cases', () => {
    expect(sqInRect(5, 5)).toEqual(null);
  })
});
