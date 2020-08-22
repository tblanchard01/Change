import {coinsToReturn} from '../coinsToReturn/coinsToReturn'
import {valueToReturn} from '../valueToReturn/valueToReturn'
export const changeCalculator = (price, amount) => {
  // if(amount-price <= 0 ) return 0 
const value = valueToReturn(price, amount)
const coins = coinsToReturn(value)
return Object.keys(coins).map(coin => `${coins[coin]}x£${coin}`).join(', ')
}