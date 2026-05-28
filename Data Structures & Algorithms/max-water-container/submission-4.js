class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let l = 0 , r = heights.length - 1;
       let maxArea = 0
       while( l < r) {
            maxArea = Math.max(maxArea , (r - l) * Math.min(heights[l] , heights[r]))
            if(heights[l] >= heights[r]) {
                r--;
            } else {
                l++
            }
       }

       return maxArea
    }
}
