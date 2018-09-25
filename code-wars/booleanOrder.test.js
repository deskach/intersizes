const {booleanOrder: solve} = require('./booleanOrder')

describe('Testing with [1, 3, 4]', () => {
  it('Base tests', () => {
    expect(solve("tft","^&")).toEqual(2);
    expect(solve("ttftff","|&^&&")).toEqual(16);
    expect(solve("ttftfftf","|&^&&||")).toEqual(339);
    expect(solve("ttftfftft","|&^&&||^")).toEqual(851);
    expect(solve("ttftfftftf","|&^&&||^&")).toEqual(2434);
  });
  
  it('single test', () => {
    expect(solve("tft","^&")).toEqual(2);
  })
});
