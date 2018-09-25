const {findMissing, reverseLetter, findShort} = require('./kyu-6');


describe('findMissing', () => {
  it('Base tests', () => {
    expect(findMissing([1, 3, 4])).toEqual(2);
    expect(findMissing([4, 5, 6, 8])).toEqual(7);
  });
  
  it('single test', () => {
    expect(findMissing([1, 3, 4])).toEqual(2);
  })
});

describe('reverseLetter', () => {
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

describe('findShort', () => {
  it('Base tests', () => {
    expect(findShort("bitcoin take over the world maybe who knows perhaps")).toEqual(3);
    expect(findShort("turns out random test cases are easier than writing out basic ones")).toEqual(3);
  });
  
  it('single test', () => {
    expect(findShort("bitcoin take over the world maybe who knows perhaps")).toEqual(3);
  })
});
