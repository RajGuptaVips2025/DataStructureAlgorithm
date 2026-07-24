function maxProfit(prices: number[]): number {
    let minimum = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        let cost = prices[i] - minimum;
        maxProfit = Math.max(maxProfit, cost);
        minimum = Math.min(minimum, prices[i]);
    }
    return maxProfit;
};