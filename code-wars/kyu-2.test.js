const {triangle} = require('./kyu-2')

describe("Insane Coloured Triangles", function(){
  it('Base tests', () => {
    expect(triangle('B')).toEqual('B');
    expect(triangle('GB')).toEqual('R');
    expect(triangle('RRR')).toEqual('R');
    expect(triangle('RGBG')).toEqual('B');
    expect(triangle('RBRGBRB')).toEqual('G');
    expect(triangle('RBRGBRBGGRRRBGBBBGG')).toEqual('G');
  })
  it('single test', () => {
    expect(triangle('GB')).toEqual('R');
  })
  
  it('edge cases', () => {
    expect(triangle('B')).toEqual('B');
  })
});