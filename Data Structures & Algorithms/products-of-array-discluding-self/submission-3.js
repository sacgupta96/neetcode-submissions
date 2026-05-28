class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let arr = []
       let pre = 1
       for(let num of nums) {
            arr.push(pre)
            pre = pre*num;
       }
       console.log(arr)
       let post = 1;
       for(let i=0; i< nums.length;i++){
            arr[nums.length - i - 1] = post * arr[nums.length - i - 1];
            post = nums[nums.length - i - 1] * post
       }

        return arr
    }
}
