class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let maxProfit = 0;
        for(let price of prices){
            min = Math.min(price , min);
            console.log(maxProfit , price , min)
            maxProfit = Math.max(maxProfit , (price - min))
        }

        return maxProfit
    }
}
