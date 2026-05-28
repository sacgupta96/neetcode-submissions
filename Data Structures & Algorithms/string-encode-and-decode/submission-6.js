class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for(let str of strs) {
            res = res + str.length + '#' + str 
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        const strs = []
        let i= 0
        while(i < str.length) {
            let j = i
            while(str[j] !== '#') {
                j++;
            }
            console.log(i ,j)
            let length = parseInt(str.substring(i , j))
            i = j+1
            j = i+ length;
            strs.push(str.substring(i,j))
            i=j
        }



        return strs
    }
}
