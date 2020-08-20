import {findNextCoin} from '../findNextCoin/findNextCoin'

export const coinsToReturn = value => {
  
  let coinsCounter = {};

  while (value > 0) {
    const nextCoin = findNextCoin(value)
    coinsCounter[nextCoin] ? coinsCounter[nextCoin]++ : coinsCounter[nextCoin] = 1
    value = (value - nextCoin).toFixed(2)
  }

  return coinsCounter
}

