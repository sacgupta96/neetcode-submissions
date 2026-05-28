class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = Number.POSITIVE_INFINITY;
        for(let price of prices) {
            console.log(l , price)
            max = Math.max(max , price - l);
            l = Math.min(l , price)
        }

        return max
    }
}
