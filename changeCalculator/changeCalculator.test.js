import {changeCalculator} from '../changeCalculator/changeCalculator'

describe('change Calculator', () => {
  it('should return 0 if change to give is 0 ', () => {
    expect(changeCalculator(20,20)).toEqual(0)
  });

});