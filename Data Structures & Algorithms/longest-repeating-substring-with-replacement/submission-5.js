class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0 , ans = 0 , counts = {}
        let maxFreq = 0;

        for(let r = 0; r < s.length; r++) {
            counts[s[r]] = (counts[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, counts[s[r]]);

            if((r - l + 1) - maxFreq > k) {
                counts[s[l]]--;
                l++;
            }
            ans = Math.max(ans , r - l + 1)
        }

        return ans;
    }
}