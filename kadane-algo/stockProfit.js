const calculateStockProfit = (prices) => {
    let start = 0;
    let end = 0;
    let profit = 0;
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        profit = prices[i] - prices[start];
        if (profit < 0) {
            start = i;
            profit = 0;
        }
        if (profit > maxProfit) {
            maxProfit = profit;
            end = i;
        }
    }
    console.log("buy on " + (start + 1) + "th day");
    console.log("sell on " + (end + 1) + "th day");
    return maxProfit;
}

console.log(calculateStockProfit([7, 1, 3, 8, 6]));
console.log(calculateStockProfit([22, 17, 3, 8, 19]));