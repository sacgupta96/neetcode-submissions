class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = {}

        nums.forEach((num) => {
            res[num] = 1 + (res[num] || 0)
        })

        const validFreq = Object.values(res).sort((a,b) => b-a).slice(0 , k)

        const ans = []

        Object.keys(res).forEach((key) => {
            if(validFreq.includes(res[key])) {
                ans.push(+key)
            }
        })

        return ans
    }
}
