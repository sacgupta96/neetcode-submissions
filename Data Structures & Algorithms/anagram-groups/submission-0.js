class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams = (strs) => {
        const sortedArr = strs.map((str) => {
            return  str.split('').sort().join('')
        });
        const res = {}

        sortedArr.forEach((str , idx) => {
          res[str] = !!res[str] ? [...res[str] , strs[idx] ] : [strs[idx]]
        });
        console.log(res)

        const finalRes = []

        Object.keys(res).forEach((key) => {
          finalRes.push(res[key])
        })

        return finalRes
    }
}
