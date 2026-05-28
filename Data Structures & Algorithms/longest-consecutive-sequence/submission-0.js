class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longest = 0
        for(let s of set) {
            
            if(!set.has(s + 1)) {
                console.log('s', s)
                let length = 1;

                while(set.has(s - length)) {
                    console.log(s - length)
                    length++;
                }

                longest = Math.max(longest , length)
            }
        }

        return longest;
    }
}
