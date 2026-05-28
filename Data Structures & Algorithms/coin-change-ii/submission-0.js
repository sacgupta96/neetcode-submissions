class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins){
        this.dp = Array.from({length: amount + 1} , () => Array(coins.length).fill(-1))
        return this.recur(coins , amount , 0)
    }

    recur(coins , left , start) {
        if(left === 0) {
            return 1
        }
        if(left < 0) {
            return 0
        }
        if(this.dp[left][start] !== -1) return this.dp[left][start]
        let ans = 0
        for(let i = start;i < coins.length;i++) {
            ans += this.recur(coins , left - coins[i] , i)
        }

        return this.dp[left][start] = ans
    }
}
