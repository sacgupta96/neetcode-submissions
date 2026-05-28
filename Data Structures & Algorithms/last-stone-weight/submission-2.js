class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxPriorityQueue()

        for(const stone of stones) {
            pq.enqueue(stone)
        }

        while(pq.size() > 1) {
            let s1 = pq.dequeue() , s2 = pq.dequeue()

            if(s1 !== s2) {
                pq.enqueue(s1 - s2)
            }
        }
        if(pq.size() === 0) return 0
        return pq.front()
    }
}
