const coins = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
export const findNextCoin = (value) => coins.find((coin) => value - coin >= 0);
