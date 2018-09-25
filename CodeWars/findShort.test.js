const {findShort} = require('./findShort')

describe('Testing with [1, 3, 4]', () => {
  it('Base tests', () => {
    expect(findShort("bitcoin take over the world maybe who knows perhaps")).toEqual(3);
    expect(findShort("turns out random test cases are easier than writing out basic ones")).toEqual(3);
  });
  
  it('single test', () => {
    expect(findShort("bitcoin take over the world maybe who knows perhaps")).toEqual(3);
  })
});
