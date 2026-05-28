class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        this.res = []

        this.recur('' , n , n)
        return this.res;
    }

    recur(curr , left , right) {
        if(left < 0 || right < 0 ) return
        if(left === 0 && right == 0) {
            this.res.push(curr);
            return;
        }
        if(left === right) {
            this.recur(curr + '(' , left - 1, right)
        } else {
            if(left > 0) {
                this.recur(curr + '(' , left - 1, right)
            } 
            this.recur(curr + ')' , left , right - 1)
        }
    }
}
