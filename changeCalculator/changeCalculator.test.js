import {changeCalculator} from '../changeCalculator/changeCalculator';

describe('change Calculator', () => {
  it('should return empty string if change to give is 0 ', () => {
    expect(changeCalculator(20, 20)).toEqual('');
  });
  it('should return correct string if change to give is 16.75 ', () => {
    const expected = '1x£10, 1x£5, 1x£1, 1x£0.50, 1x£0.20, 1x£0.05';
    expect(changeCalculator(20, 36.75)).toEqual(expected);
  });
});
