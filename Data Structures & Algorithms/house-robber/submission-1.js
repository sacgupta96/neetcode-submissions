class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = Array(nums.length).fill(-1)
        return this.recur(0 , nums , dp)
    }

    recur(idx , nums , dp) {
        if(idx >= nums.length) return 0
        if(dp[idx] !== -1) return dp[idx]
        let pick = nums[idx] + this.recur(idx + 2 , nums , dp)
        let skip = this.recur(idx + 1 , nums , dp);

        return dp[idx] = Math.max(pick , skip);
    }
}
