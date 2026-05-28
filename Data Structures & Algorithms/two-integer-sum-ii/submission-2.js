class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = {}

        for(let i = 0;i < numbers.length;i++) {
            let temp = target - numbers[i];
            if(Object.keys(map).includes(temp.toString())) {
                return [map[temp] +1 , i+1]
            }
            map[numbers[i]] = i
        }
    }
}
