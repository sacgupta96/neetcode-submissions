class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const pq = new MinPriorityQueue()

        for(let num of nums){
            pq.enqueue(num)
        }

        while(nums.length - k > 0) {
            pq.dequeue()
            k++;
        }

        return pq.front()
    }
}
