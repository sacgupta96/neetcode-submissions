class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        this.res = []
        this.recur(nums , new Array(nums.length).fill(false) , [])
        return this.res;
    }

    recur(nums , used , curr) {
        if(curr.length === nums.length) {
            this.res.push([...curr]);
            return;
        }

        for(let i = 0; i < nums.length;i++) {
            if(used[i]) continue;
            
            used[i] = true
            this.recur(nums , used , [...curr , nums[i]]);
            used[i] = false
        }
    }
}
