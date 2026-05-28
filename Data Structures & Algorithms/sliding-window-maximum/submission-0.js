class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let arr = []
        let temp = [] , tempMax = nums[0];
        let l = 0 , r = k -1;
        for(let i = 0;i<=r;i++){
            tempMax = Math.max(tempMax , nums[i]);
            temp.push(nums[i]);
        }
        arr.push(tempMax)
        while(r + 1 < nums.length) {
            let shiftedElement = temp.shift();
            if(shiftedElement === tempMax) {
                tempMax = Math.max(...temp);
            }
            if(nums[r+1] > tempMax) {
                tempMax = nums[r+1]
            }
            temp.push(nums[r+1])
            
            arr.push(tempMax);
            r++;
            console.log(tempMax , temp)
        }
        return arr;
    }

   
}
