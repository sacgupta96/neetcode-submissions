class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let max = 0 , str = new Set()

        for(let r = 0;r < s.length;r++){
            while(str.has(s[r])) {
                str.delete(s[l]);
                l++
            }
            str.add(s[r]);
            max = Math.max(max , r - l + 1)
        }
        return max;
    }
}
