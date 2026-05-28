class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        this.res = [];
        this.backtrack(nums, 0, []);
        return this.res;
    }

    backtrack(nums, start, curr) {
        this.res.push([...curr]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            curr.push(nums[i]);
            this.backtrack(nums, i + 1, curr);
            curr.pop();
        }
    }
}