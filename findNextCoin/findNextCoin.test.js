import {findNextCoin} from './findNextCoin';
describe('findnextcoin', () => {
  it('finds next coin for £200 change', () => {
    expect(findNextCoin(200)).toEqual(50);
  });

  it('finds next coin for £1 change', () => {
    expect(findNextCoin(1)).toEqual(1);
  });

  it('finds next coin for £0.50 change', () => {
    expect(findNextCoin(0.5)).toEqual(0.5);
  });
});
