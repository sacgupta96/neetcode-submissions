class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pq = new MinPriorityQueue(p => p[0])

        for(let [x , y] of points) {
            const dis = x * x + y * y;
            pq.enqueue([dis , x , y ])
        }
        const res = []
        while(k > 0) {
            const [_ , x , y ] = pq.dequeue();
            res.push([x , y])
            k--;
        }

        return res;
    }
}
