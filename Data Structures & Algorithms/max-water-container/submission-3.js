class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let l = 0 , r = heights.length -1;
       let max = 0
       while(l < r) {
            let len = Math.min(heights[l] , heights[r])

            max = Math.max(len * (r - l) , max)

            if(heights[l] > heights[r]) {
                r--;
            } else {
                l++
            }
       }

       return max
    }
}
