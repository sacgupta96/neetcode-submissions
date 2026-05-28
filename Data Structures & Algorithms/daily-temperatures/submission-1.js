class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const ans = new Array(temperatures.length).fill(0);
        for(let i = 0;i < temperatures.length;i++) {
            while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const val = stack.pop();
                ans[val] = i - val;
                
            }
            stack.push(i);
        }

        return ans;
    }
}
