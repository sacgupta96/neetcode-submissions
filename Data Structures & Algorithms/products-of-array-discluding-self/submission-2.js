class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       const prefix = Array(nums.length)
       const postfix = Array(nums.length);
       let pre = 1 , post = 1;
       for(let i =0;i< nums.length;i++) {
            prefix[i] = pre
            postfix[nums.length - 1 - i] = post
            pre = pre * nums[i]
            post = post * nums[nums.length - 1 - i]
       }
       const res = []
       for(let i =0;i< nums.length;i++) {
            res.push(postfix[i] * prefix[i])
       }

       return res
    }
}
