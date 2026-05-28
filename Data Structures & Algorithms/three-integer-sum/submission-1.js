class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNum = nums.sort((a,b) => a-b)


        const res = []

        for(let i = 0;i< sortedNum.length;i++){
            if(sortedNum[i] > 0){
                break;
            }
            if(i > 0 && sortedNum[i] === sortedNum[i-1]) {
                continue;
            }

            let l = i+1;let r = sortedNum.length -1;

            while(l < r) {
                const sum = sortedNum[i] + sortedNum[l] + sortedNum[r];

                if(sum > 0) {
                    r--;
                } else if(sum < 0) {
                    l++
                } else if (sum === 0) {
                    res.push([sortedNum[i] , sortedNum[l] , sortedNum[r]]);
                    l++;
                    // r--;
                    while(l < r && nums[l] === nums[l-1]) {
                        l++
                    }
                }
            }
        }

        return res;
    }
}
