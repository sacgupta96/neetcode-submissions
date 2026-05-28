class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resLen = 0,
            str = "";
        for (let i = 0; i < s.length; i++) {
            const oddStr = this.checkForOdd(i, s);
            if (oddStr.length > str.length) {
                str = oddStr;
                resLen = oddStr.length;
            }
            if (i < s.length - 1 && s[i] === s[i + 1]) {
                const evenstr = this.checkForEven(i, s);
                if (evenstr.length > str.length) {
                    str = evenstr;
                    resLen = evenstr.length;
                }
            }
        }

        return str;
    }

    checkForOdd(idx, s) {
        let left = idx,
            right = idx;
        while (left >= 0 && right < s.length) {
            if (s[left] !== s[right]) {
                break;
            }
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    checkForEven(idx, s) {
        let left = idx,
            right = idx + 1;
        while (left >= 0 && right < s.length) {
            if (s[left] !== s[right]) {
                break;
            }
            left--;
            right++;
        }

        return s.substring(left + 1, right);
    }
}
