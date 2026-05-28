class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();
    for (const task of tasks) {
        freq.set(task, (freq.get(task) || 0) + 1);
    }

    const maxHeap = new MaxPriorityQueue(x => x); // stores remaining counts
    for (const count of freq.values()) {
        maxHeap.enqueue(count);
    }

    const cooldown = []; // queue: [remainingCount, availableTime]
    let time = 0;

    while (!maxHeap.isEmpty() || cooldown.length > 0) {
        time++;

        // If a task is done cooling down, reinsert into heap
        if (cooldown.length && cooldown[0][1] === time) {
            maxHeap.enqueue(cooldown.shift()[0]);
        }

        if (!maxHeap.isEmpty()) {
            let count = maxHeap.dequeue() - 1;
            if (count > 0) {
                cooldown.push([count, time + n + 1]);
            }
        }
    }

    return time;
    }
}
