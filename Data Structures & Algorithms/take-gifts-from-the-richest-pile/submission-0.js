class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        const pq = new MaxPriorityQueue()

        for(let g of gifts) {
            pq.enqueue(g)
        }
        let i = 0;
        while(i !== k) {
            let val = pq.dequeue()
            // console.log(val)
            pq.enqueue(Math.floor(Math.sqrt(val)))
            i++;
        }

        let sum = 0

        while(pq.size() > 0) {
            sum += pq.dequeue()
        }

        return sum
    }
}
