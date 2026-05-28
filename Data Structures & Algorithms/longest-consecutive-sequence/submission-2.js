class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();

        for(let num of nums){
            set.add(num)
        }

        let max = 0;
        
        for(let i = 0; i< nums.length;i++) {
            let a = nums[i] , temp = 1
            while(set.has(a+1)) {
                temp++;
                a++;
            }
            console.log(temp)
            max = Math.max(max , temp)
        }

        return max;
    }
}
