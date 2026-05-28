class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let l = 0 ; let r = heights.length -1;
        while(l < r) {
            let temp = Math.min(heights[l] , heights[r]) * (r - l);
            max = Math.max(temp , max)

            if(heights[l] > heights[r]) {
                r--;
            } else {
                l++
            }
        }
        return max
    }
}
