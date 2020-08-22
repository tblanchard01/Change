import {changeCalculator} from '../changeCalculator/changeCalculator'

describe('change Calculator', () => {
  it('should return 0 if change to give is 0 ', () => {
    expect(changeCalculator(20,20)).toEqual("")
  });
  it('should return correct obj if change to give is 16.75 ', () => {
    expect(changeCalculator(20, 36.75)).toEqual("1x£1, 1x£5, 1x£10, 1x£0.5, 1x£0.2, 1x£0.05")
  });

});