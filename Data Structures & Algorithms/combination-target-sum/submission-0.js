class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = []
        this.recur(target, nums, res, [] , 0);
        return res;
    }

    recur(left, nums, res, curr , idx) {
        if (left < 0 || idx >= nums.length) return;
        if (left === 0) {
            res.push(curr);
            return;
        }
        for(let i = idx;i < nums.length;i++) {
            this.recur(left - nums[i] , nums , res , [...curr , nums[i]] , i);
        }
    }
}
