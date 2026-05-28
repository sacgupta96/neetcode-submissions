class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let ans = 0

        const leftHeightest = []
        const rightHeightest = []
        let curr = 0
        for(let i = 0 ; i < height.length;i++) {
            curr = Math.max(curr , height[i]);
            leftHeightest.push(curr);
        }
        curr = 0
        for(let i = height.length - 1 ; i >= 0;i--) {
            curr = Math.max(curr , height[i]);
            rightHeightest.unshift(curr);
        }

        for(let i = 0 ;i < height.length;i++) {
            ans += Math.min(rightHeightest[i] , leftHeightest[i]) - height[i]
        }

        return ans
    }
}
