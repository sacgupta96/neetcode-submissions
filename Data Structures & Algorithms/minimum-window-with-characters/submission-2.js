class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let map = {}

        for(let char of t) {
            map[char] = (map[char] || 0) + 1
        }

        let l = 0 , r = 0 , count = 0, minLen = s.length , si = -1;

        while(r < s.length) {
            if(map[s[r]] > 0) {
                count +=1
            }
            map[s[r]] = (map[s[r]] || 0) - 1;
            
            while(count === t.length) {
        
                if(r-l+1 <= minLen) {
                    si = l;
                    minLen = r - l + 1
                }
                map[s[l]] = (map[s[l]] || 0) + 1;
                if(map[s[l]] > 0) {
                    count -=1
                }
                l++;
            }
            r++;
        }

        return si === -1 ?  "" : s.substring(si , si + minLen)
    }
}
