class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for(let str of strs) {
            res = res + str + '|!'
        }
        
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = str.split('|!')
        return strs.slice(0 , -1)
    }
}
