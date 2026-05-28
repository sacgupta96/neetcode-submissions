class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxheap = new MaxPriorityQueue();

        for(let stone of stones) {
            maxheap.enqueue(stone)
        }

        while(maxheap.size() > 1) {
            let f = maxheap.dequeue() , s = maxheap.dequeue();
            console.log(f , s)
            if(f !== s) {
                maxheap.enqueue(Math.abs(f - s))
            } 
        }
        if(maxheap.size() === 0) return 0
        return maxheap.front()
    } 
}
