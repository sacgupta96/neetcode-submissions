class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        const dp1 = Array(nums.length).fill(-1);
        const dp2 = Array(nums.length).fill(-1);

        return Math.max(
            this.recur(0, nums.length - 2, nums, dp1),
            this.recur(1, nums.length - 1, nums, dp2)
        );
    }

    recur(idx, end, nums, dp) {
        if (idx > end) return 0;

        if (dp[idx] !== -1) return dp[idx];

        let pick = nums[idx] + this.recur(idx + 2, end, nums, dp);
        let skip = this.recur(idx + 1, end, nums, dp);

        return dp[idx] = Math.max(pick, skip);
    }
}