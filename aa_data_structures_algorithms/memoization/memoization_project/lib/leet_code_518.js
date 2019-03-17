// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

const change = (amount, coins, combinations = {}) => {
  const key = `${amount  }-${  coins}`;
  if (key in combinations) return combinations[key];
  if (amount === 0) return 1;

  const currentCoin = coins[coins.length - 1];
  let comboAmount = 0;

  for (let qty = 0; qty * currentCoin <= amount; qty++) {
    comboAmount += change(amount - qty * currentCoin, coins.slice(0, -1), combinations);
  }

  combinations[key] = comboAmount;
  return combinations[key];
};
