import {coinsToReturn} from './coinsToReturn'


describe('coinsToReturn', () => {
  it('should return 0 if change to give is 0 ', () => {
    expect(coinsToReturn(0)).toEqual(0)
  });

  it.only('should return expected change for £2 change', () => {
    const expected = {2:1}
    expect(coinsToReturn(2)).toEqual(expected)
  });

  it('should return expected change for £200 change', () => {
    const expected = {50:4}
    expect(coinsToReturn(200)).toEqual(expected)
  });

})