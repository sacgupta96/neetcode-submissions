class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        this.wordSet = new Set(wordDict);
        this.memo = new Array(s.length).fill(undefined);
        this.n = s.length;
        return this.solve(s, 0);
    }

    solve(s, idx) {
        if (idx === this.n) return true;
        if (this.memo[idx] !== undefined) {
            return this.memo[idx];
        }

        for (let end = idx + 1; end <= this.n; end++) {
            const part = s.substring(idx, end);

            if (this.wordSet.has(part) && this.solve(s, end)) {
                this.memo[idx] = true;
                return true;
            }
        }

        this.memo[idx] = false;
        return false;
    }
}