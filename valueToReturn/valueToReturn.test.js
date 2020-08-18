import {valueToReturn} from './valueToReturn'
describe('valueToReturn', () => {
  it('should return 0 if price === amount given', () => {
    expect(valueToReturn(5, 5)).toEqual(0)
  });

  it('should return 0 if price > amount given', () => {
    expect(valueToReturn(6, 5)).toEqual(0)
  });

  it('should calculate value correctly', () => {
    expect(valueToReturn(5, 6)).toEqual(1)
  });

  it('should handle decimals correctly', () => {
    expect(valueToReturn(5.60, 6.25)).toEqual(0.65)
  });

});