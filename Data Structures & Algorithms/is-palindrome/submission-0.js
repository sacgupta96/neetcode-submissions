class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
        return str === str.split('').reverse().join('')
    }
}