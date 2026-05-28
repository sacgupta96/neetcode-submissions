class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let max = 0 , count = 0;
        let map = {}
        for(let r = 0;r < s.length;r++){
            map[s[r]] = (map[s[r]] || 0) + 1;
            count = Math.max(count , map[s[r]]);
            let len = r - l + 1;

            while((r - l + 1) - count > k){
                map[s[l]] -=1;
                count = Math.max(...Object.values(map))
                l++;
            }
            console.log(l , r)
            if(len - count <= k) {
                max = Math.max(len , max)
            }

        }

        return max
    }
}
