class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set()
        let ans = 0,l = 0
        for(let r = 0;r < s.length;r++) {
            while(set.has(s[r])) {
                set.delete(s[l])
                l++;
            } 
            set.add(s[r]);
            ans = Math.max(ans , r - l + 1)
        }

        return ans
    }
}
