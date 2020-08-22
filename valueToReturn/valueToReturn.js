export const valueToReturn = (price, amount) => {
  return price >= amount ? 0 : Number((amount-price).toFixed(2));
};
