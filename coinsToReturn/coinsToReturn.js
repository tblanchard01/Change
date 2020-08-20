import {findNextCoin} from '../findNextCoin/findNextCoin'
let coinsCounter = {};
export const coinsToReturn = value => {
  if (value === 0) {
    return 0
  }

  while (value > 0) {
    
    const nextCoin = findNextCoin(value)
    coinsCounter[nextCoin] ? coinsCounter[nextCoin]++ : coinsCounter[nextCoin] = 1
    value -= nextCoin;
  }

  return coinsCounter
}

