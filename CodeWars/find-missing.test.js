const {findMissing} = require('./find-missing');

describe('Testing with [1, 3, 4]', () => {
  it('Base tests', () => {
    expect(findMissing([1, 3, 4])).toEqual(2);
    expect(findMissing([4, 5, 6, 8])).toEqual(7);
  });
  
  it('single test', () => {
    expect(findMissing([1, 3, 4])).toEqual(2);
  })
});
