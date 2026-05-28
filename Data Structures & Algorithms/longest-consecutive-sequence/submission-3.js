class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set()
        let ans = 0;
        for(let num of nums) {
            set.add(num)
        }

        for(let num of nums) {
            if(!set.has(num - 1)) {
                let curr = num , currAns = 0
                while(set.has(curr)) {
                    curr++
                    currAns++;
                }

                ans = Math.max(currAns , ans)
            }
        }

        return ans;
    }


}
