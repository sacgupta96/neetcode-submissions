class Solution {
    combinationSum(nums, target) {
        this.res = [];

        this.recur(nums, target, [], 0);

        return this.res;
    }

    recur(nums, left, curr, idx) {
        if (left === 0) {
            this.res.push([...curr]);
            return;
        }

        if (left < 0) return;

        for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i]);

            this.recur(nums, left - nums[i], curr, i);

            curr.pop();
        }
    }
}