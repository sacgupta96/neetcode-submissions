class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        
        let maxLen = 0;

        let temp = 0

        for(let num of nums){
            while(set.has(num)) {
                num++;
                temp++;
            }
            maxLen = Math.max(maxLen , temp)
            temp = 0;
        }

        return maxLen

    }
}
