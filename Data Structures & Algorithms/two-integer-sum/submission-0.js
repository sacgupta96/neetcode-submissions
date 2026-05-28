class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let rem = {}

        for(let [idx , num ] of nums.entries()){
          console.log(num , idx)
            if(num in rem) {
                return [rem[num] , idx]
            }
            rem[target - num] = idx
        }
    }
}
