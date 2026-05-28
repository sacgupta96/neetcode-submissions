class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = {}

        for(let i = 0;i< numbers.length;i++) {
            console.log(map , (numbers[i]))
            if((numbers[i]) in map) {
                return [map[numbers[i]] , i+1]
            }
            map[(target - numbers[i]).toString()] = i+1;
        }

        console.log(map)
    }
}
