class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const ans = []

        this.recur(0 , [], nums , ans)
        return ans;
    }

    recur(idx , curr , nums , ans) {
        if(idx === nums.length) {
            ans.push(curr)
            return
        }

        let pick = this.recur(idx + 1 , [...curr , nums[idx]] , nums , ans);
        let skip = this.recur(idx + 1 , curr , nums , ans);
    }
}
