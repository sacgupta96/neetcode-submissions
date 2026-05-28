class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0 , l = 0;
        let set = new Map()
        for(let r = 0;r < s.length;r++) {
            if(set.has(s[r])) {
                l = Math.max(set.get(s[r]) + 1 , l);
            } 
            set.set(s[r] , r);
            max = Math.max(max , r - l + 1)
        }

        return max
    }
}
