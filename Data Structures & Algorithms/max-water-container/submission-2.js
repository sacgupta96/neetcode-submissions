class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let max = 0;
       let l = 0, r = heights.length -1 ;
       while(l < r) {
            let height = Math.min(heights[l] , heights[r])
            max = Math.max(max , height * (r - l))
            console.log(heights[l] , r , max)
            if(heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }

       }

       return max
    }
}
