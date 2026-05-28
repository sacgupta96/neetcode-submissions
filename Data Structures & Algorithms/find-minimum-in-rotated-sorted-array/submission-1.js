class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0 , r = nums.length - 1 , ans = Infinity

        while(l <= r) {
            // console.log(l , r)
            let mid = Math.floor((l + r)/2)
            ans = Math.min(ans , nums[mid])
            if(nums[mid] < nums[r]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return ans
    }
}
