const maxProfit = (prices: Array<number>): number => {
  let max = -Infinity;
  let buyDay = 0;
  let sellDay = 0;

  while (sellDay < prices.length) {
    const currentWindowProfit = prices[sellDay] - prices[buyDay];
    max = Math.max(currentWindowProfit, max);
    if (currentWindowProfit <= 0) {
      buyDay = sellDay;
    }
    sellDay++;
  }
  return max;
};
