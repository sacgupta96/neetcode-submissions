class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       const res = [1]
        for(let i = 0;i < nums.length-1;i++) {
            console.log(i , res)
            res.push(res[i] * nums[i]) 
        }
        console.log(res)
        let endfix = 1
        for(let i = nums.length - 1;i>0;i--) {
          endfix *= nums[i]
          res[i-1] *= endfix
          console.log(nums[i] , endfix , res)

        }
        return res
    }
}
