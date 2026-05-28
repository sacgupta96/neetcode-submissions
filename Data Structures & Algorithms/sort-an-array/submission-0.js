class MinHeap {
    constructor() {
        this.arr = [];
    }

    add(val) {
        this.arr.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.arr.length === 0) return null;

        if (this.arr.length === 1) {
            return this.arr.pop();
        }

        const min = this.arr[0];
        const last = this.arr.pop();

        this.arr[0] = last;
        this.bubbleDown();

        return min;
    }

    size() {
        return this.arr.length;
    }

    bubbleUp() {
        let curr = this.arr.length - 1;

        while (curr > 0) {
            let parent = Math.floor((curr - 1) / 2);

            if (this.arr[parent] > this.arr[curr]) {
                [this.arr[parent], this.arr[curr]] =
                    [this.arr[curr], this.arr[parent]];
                curr = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown() {
        let curr = 0;
        let n = this.arr.length;

        while (true) {
            let left = 2 * curr + 1;
            let right = 2 * curr + 2;
            let smallest = curr;

            if (left < n && this.arr[left] < this.arr[smallest]) {
                smallest = left;
            }

            if (right < n && this.arr[right] < this.arr[smallest]) {
                smallest = right;
            }

            if (smallest === curr) break;

            [this.arr[curr], this.arr[smallest]] =
                [this.arr[smallest], this.arr[curr]];

            curr = smallest;
        }
    }
}

class Solution {
    sortArray(nums) {
        const ans = [];
        let pq = new MinHeap();

        for (let num of nums) {
            pq.add(num);
        }

        while (pq.size() > 0) {
            ans.push(pq.pop());
        }

        return ans;
    }
}
