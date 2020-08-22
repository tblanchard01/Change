import {coinsToReturn} from './coinsToReturn';

describe('coinsToReturn', () => {
  it('should return 0 if change to give is 0 ', () => {
    expect(coinsToReturn(0)).toEqual({});
  });

  it('should return expected change for £2 change', () => {
    const expected = {2: 1};
    expect(coinsToReturn(2)).toEqual(expected);
  });

  it('should return expected change for £200 change', () => {
    const expected = {50: 4};
    expect(coinsToReturn(200)).toEqual(expected);
  });

  it('should return expected change for £16.75 change', () => {
    const expected = {10: 1, 5: 1, 1: 1, 0.5: 1, 0.2: 1, 0.05: 1};
    expect(coinsToReturn(16.75)).toEqual(expected);
  });
  it('should return expected change for £77.77 change', () => {
    const expected = {
      50: 1,
      20: 1,
      5: 1,
      2: 1,
      0.5: 1,
      0.2: 1,
      0.05: 1,
      0.02: 1,
    };
    expect(coinsToReturn(77.77)).toEqual(expected);
  });
});
