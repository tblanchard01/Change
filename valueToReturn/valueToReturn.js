export const valueToReturn = (price, amount) => price === amount || price > amount ? 0 : Number((amount-price).toFixed(2))
  