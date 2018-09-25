const {reverseLetter} = require('./reverseLetter');

describe('Solution', () => {
  it('Base tests', () => {
    expect(reverseLetter('krishan')).toEqual('nahsirk');
    expect(reverseLetter('ultr53o?n')).toEqual('nortlu');
    expect(reverseLetter('ab23c')).toEqual('cba');
    expect(reverseLetter('krish21an')).toEqual('nahsirk');
  });
  
  it('single test', () => {
    expect(reverseLetter('krishan')).toEqual('nahsirk');
  })
});

