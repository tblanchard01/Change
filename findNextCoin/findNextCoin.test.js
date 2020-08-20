import {findNextCoin} from './findNextCoin'
describe('findnextcoin', () => {
  it('finds next coin for £200 change', () => {
    expect(findNextCoin(200)).toEqual(50)
  });

  it('finds next coin for £1 change', () => {
    expect(findNextCoin(1)).toEqual(1)
  });

});