class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1 , r = Math.max(...piles) , ans = r

        while(l <= r) {
            const mid = Math.floor((l + r)/2);

            const timeTaken = piles.reduce((acc , cur ) => {
                return acc + Math.ceil(cur/mid)
            } , 0)
            if(timeTaken <= h) {
                ans = mid;
                r = mid - 1
            } else {
                l = mid + 1
            }
        } 

        return ans
    }
}
