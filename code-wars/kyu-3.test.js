const {solve} = require('./kyu-3')

describe("The boolean order", function(){
  it('Base tests', () => {
    expect(solve("tft", "^&")).toEqual(2);
    expect(solve("ttftff", "|&^&&")).toEqual(16);
    expect(solve("ttftfftf", "|&^&&||")).toEqual(339);
    expect(solve("ttftfftft", "|&^&&||^")).toEqual(851);
    expect(solve("ttftfftftf", "|&^&&||^&")).toEqual(2434);
  })
  it('single test', () => {
    expect(solve("tft", "^&")).toEqual(2);
  })
  
  it('edge cases', () => {
  })
});