const coins = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
let coinsCounter = {};
const nextCoin = value => coins.find(coin => value-coin>0)

export const coinsToReturn = value => {
  if (value === 0) {
    return 0
  }
if(nextCoin(value)){
 coinsCounter[nextCoin]? coinsCounter[nextCoin]++ : coinsCounter[nextCoin] = 1
}
return coinsCounter
}

