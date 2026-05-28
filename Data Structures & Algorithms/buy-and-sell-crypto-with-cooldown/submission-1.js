class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        this.memo = new Map();
        return this.recur(prices , 0 , true)
    }

    recur(prices, idx, canBuy) {
        if (idx >= prices.length) {
            return 0;
        }
        const key = `${idx}-${canBuy}`;
        if (this.memo.has(key)) return this.memo.get(key);

        let ans = -Infinity; 
        if (canBuy) {
            let buy = -prices[idx] + this.recur(prices, idx + 1, false);
            ans = Math.max(ans, buy);
        } else {
            let sell = prices[idx] + this.recur(prices, idx + 2, true);
            ans = Math.max(ans, sell);
        }
        let skip = this.recur(prices, idx + 1, canBuy);
        ans = Math.max(ans, skip);

        this.memo.set(key, ans);
        return ans;
    }
}
