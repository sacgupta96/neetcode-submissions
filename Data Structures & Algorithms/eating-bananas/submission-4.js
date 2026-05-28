class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const hrTaken = (speed , piles) => {
            let ans = 0

            for(let pile of piles) {
                ans += Math.ceil(pile / speed);
            }

            return ans
        }
        let l = 1 , r = Math.max(...piles);

        while(l < r) {
            let m = Math.floor((l + r) / 2);
            if(hrTaken(m , piles) > h) {
                l = m + 1
            } else {
                r = m
            }
        }

        return r
    }

   
}
