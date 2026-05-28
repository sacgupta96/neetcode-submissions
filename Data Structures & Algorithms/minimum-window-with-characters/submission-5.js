class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';

    let maps = {}, mapt = {};
    for (let char of t) {
        mapt[char] = (mapt[char] || 0) + 1;
    }

    let need = Object.keys(mapt).length;
    let have = 0;
    let l = 0;
    let res = [-1, -1];
    let resMin = Infinity;

    for (let r = 0; r < s.length; r++) {
        const char = s[r];
        if (char in mapt) {
            maps[char] = (maps[char] || 0) + 1;
            if (maps[char] === mapt[char]) {
                have += 1;
            }
        }

        while (have === need) {
            if ((r - l + 1) < resMin) {
                res = [l, r];
                resMin = r - l + 1;
            }
            if (s[l] in mapt) {
                maps[s[l]] -= 1;
                if (maps[s[l]] < mapt[s[l]]) {
                    have -= 1;
                }
            }
            l += 1;
        }
    }

    return resMin === Infinity ? '' : s.substring(res[0], res[1] + 1);
    }
}
