class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        this.dp = Array(amount + 1).fill(-1)
        const ans = this.recur(coins, amount)
        return ans === Infinity ? -1 : ans;
    }

    recur(arr, left) {
        if (left === 0) {
            return 0;
        }
        if(left < 0) {
            return Infinity;
        }

        if(this.dp[left] !== -1) return this.dp[left]

        let ans = Infinity
        for(let coin of arr) {
            ans = Math.min(ans , 1 + this.recur(arr , left - coin))
        }
        this.dp[left] = ans
        return ans;
    }
}
