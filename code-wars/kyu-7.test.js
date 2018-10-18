const {triangle} = require('./kyu-7')

describe("Coloured Triangles", function(){
  it('Base tests', () => {
    expect(triangle('GB')).toEqual('R');
    expect(triangle('RRR')).toEqual('R');
    expect(triangle('RGBG')).toEqual('B');
    expect(triangle('RBRGBRB')).toEqual('G');
    expect(triangle('RBRGBRBGGRRRBGBBBGG')).toEqual('G');
    expect(triangle('B')).toEqual('B');
  })
  it('single test', () => {
    expect(triangle('GB')).toEqual('R');
  })
  
  it('edge cases', () => {
    expect(triangle('B')).toEqual('B');
  })
});