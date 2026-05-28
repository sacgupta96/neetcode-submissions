class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxArea = 0;
        for (let i = 0; i <= heights.length; i++) {
            while(stack.length && (i === heights.length || heights[stack[stack.length -1]] >= heights[i])) {
                const height = heights[stack.pop()]
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea , height*width)
            }
            stack.push(i)
        }

        return maxArea
    }
}
