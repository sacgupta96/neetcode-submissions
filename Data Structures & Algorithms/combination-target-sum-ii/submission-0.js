class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        this.res = [];
        this.recur(candidates, target, [], 0);
        return this.res
    }

    recur(arr, left, curr, idx) {
        if (left === 0) {
            this.res.push([...curr]);
            return;
        }

        if (left < 0 || idx === arr.length) return;

        for (let i = idx; i < arr.length; i++) {
            if (i > idx && arr[i] === arr[i - 1]) continue;
            this.recur(arr , left - arr[i] , [...curr , arr[i]] , i + 1);
        }
    }
}
