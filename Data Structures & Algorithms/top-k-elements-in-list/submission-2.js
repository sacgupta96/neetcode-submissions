class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const arr = Array.from({ length: nums.length+1 }, () => []);
        if(nums.length === k) return nums;
        
        for(let num of nums) {
            map[num] = map[num] ? map[num] + 1 : 1
        }
        
        for(let k in map) {
            arr[map[k]].push(parseInt(k))
        }
        const res= []
        for(let i = arr.length-1;i> -1;i--) {
            for(const n of arr[i]) {
                res.push(n);
                if(res.length === k) {
                    return res
                }
            }
        }
    }
}
