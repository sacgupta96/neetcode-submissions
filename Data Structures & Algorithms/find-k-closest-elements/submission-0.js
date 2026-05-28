class Solution {
    
    findClosestElements(arr, k, x) {
        let l = 0,
            r = arr.length;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (x - arr[m] > arr[m + k] - x) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return arr.slice(l, l + k);
    }
}