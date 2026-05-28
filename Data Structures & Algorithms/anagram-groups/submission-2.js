class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams = (strs) => {
         const ans = {}

         for(const str of strs) {
            const count = Array(26).fill(0);

            for(const c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = count.join(',');
            ans[key] = key in ans ? [...ans[key] , str] : [str]
         }

        return Object.values(ans)
    }
}
