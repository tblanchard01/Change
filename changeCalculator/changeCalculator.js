import {coinsToReturn} from '../coinsToReturn/coinsToReturn';
import {valueToReturn} from '../valueToReturn/valueToReturn';
export const changeCalculator = (price, amount) => {
  const value = valueToReturn(price, amount);
  const coins = coinsToReturn(value);
  return Object.keys(coins).sort((a, b) => b-a).map((coin) => {
    return `${coins[coin]}x£${coin<1? Number(coin).toFixed(2) : coin}`;
  }).join(', ');
};
