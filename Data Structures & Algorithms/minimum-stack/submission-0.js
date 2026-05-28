class MinStack {

    constructor() {
       this.arr = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        return this.arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.arr)
    }
}
