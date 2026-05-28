class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let len = s.length;
        let i =0;
        let str = '';
        while(i < len) {
            console.log(s.charCodeAt(i) , s[i])
            if(
            (s.charCodeAt(i) > 47 && s.charCodeAt(i) <= 57) || 
            (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 122)) {
                console.log(s[i])
                str += s[i].toLocaleLowerCase()
            }
            i++;
        }
        console.log(str , str.split('').reverse().join('') )
        return str === str.split('').reverse().join('')
    }
}