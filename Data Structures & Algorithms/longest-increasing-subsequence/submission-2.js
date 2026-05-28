class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        this.dp = Array.from({length: nums.length} , () => Array(nums.length + 1).fill(-1));
        return this.recur(nums, 0, -1);
    }

    recur(nums, idx, j) {
        if (idx === nums.length) {
            return 0;
        }
        if(this.dp[idx][j + 1] !== -1) return this.dp[idx][j + 1]
        let pick = 0;
        if (j === -1 || nums[idx] > nums[j]) {
            pick = 1 + this.recur(nums, idx + 1, idx);
        }
        let skip = this.recur(nums, idx + 1, j);

        return this.dp[idx][j + 1] = Math.max(pick, skip);
    }
}
