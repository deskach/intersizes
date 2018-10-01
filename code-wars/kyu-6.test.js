const {findMissing, reverseLetter, findShort, array_diff, shortestArrang} = require('./kyu-6');


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


describe("array_diff tests", function() {
  it("Should pass Sample tests", function() {
    expect(array_diff([], [4,5])).toEqual([]);
    expect(array_diff([3,4], [3])).toEqual([4]);
    expect(array_diff([1,8,2], [])).toEqual([1,8,2]);
  });
  
  it('single test', () => {
    expect(array_diff([3,4], [3])).toEqual([4]);
  })
});

describe("shortestArrang Tests", function(){
  it("Some Cases", function(){
    expect(shortestArrang(10)).toEqual([4, 3, 2, 1]);
    expect(shortestArrang(14)).toEqual([5, 4, 3, 2]);
    expect(shortestArrang(16)).toEqual([-1]);
    expect(shortestArrang(22)).toEqual([7, 6, 5, 4]);
    expect(shortestArrang(65)).toEqual([33, 32]);
  });
  
  it("single test", function(){
    expect(shortestArrang(10)).toEqual([4, 3, 2, 1]);
  });
});