class Solution {
    findTwoSum(nums , idx , target) {
        const map = {}
        let res = []
        for(let i = idx;i < nums.length;i++) {
            if(map[nums[i]] !== undefined) {
                res.push([nums[i] , target - nums[i]])
            }
            map[target - nums[i]] = i
        }

        return res;
    }

    threeSum(nums) {
        nums.sort((a , b) => a - b);

        const res = []

        for(let i = 0;i < nums.length;i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue
            if(nums[i] > 0) {
                break;
            }
            const ans = this.findTwoSum(nums ,  i + 1 , nums[i] * -1) 
            if(ans.length > 0) {
                for(let j = 0;j < ans.length;j++) {
                    if(j > 0 && ans[j][0] === ans[j - 1][0]) continue;
                    res.push([nums[i] , ans[j][0] , ans[j][1]])
                }
            }
        }


        return [...res];
    }
}


