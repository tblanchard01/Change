import {findNextCoin} from '../findNextCoin/findNextCoin';

export const coinsToReturn = (value) => {
  const counter = {};

  while (value > 0) {
    const coin = findNextCoin(value);
    counter[coin] ? counter[coin]++ : counter[coin] = 1;
    value = (value - coin).toFixed(2);
  }

  return counter;
};

