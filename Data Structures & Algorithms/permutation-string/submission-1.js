class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0 , r = s1.length - 1;

        while(r < s2.length) {
            let substr = s2.substring(l , r + 1);
            console.log(substr)
            if(substr.split('').sort().join('') === s1.split('').sort().join('')) {
                return true;
            }
            l++;
            r++;
        }

        return false;
    }
}
