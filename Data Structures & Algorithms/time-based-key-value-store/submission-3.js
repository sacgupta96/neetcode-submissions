class TimeMap {
    constructor() {
        this.keyStore = new Map();
        this.keyTimeStamp = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            const map = this.keyStore.get(key);
            map.set(timestamp, value);
            this.keyStore.set(key, map);
        } else {
            const map = new Map();
            map.set(timestamp, value);
            this.keyStore.set(key, map);
        }
        let timeArr = [];
        if (this.keyTimeStamp.has(key)) {
            timeArr = this.keyTimeStamp.get(key);
        }
        timeArr.push(timestamp);
        this.keyTimeStamp.set(key, timeArr);
        return null;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyTimeStamp.has(key)) return "";

        const arr = this.keyTimeStamp.get(key);
        let l = 0,
            r = arr.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (arr[m] <= timestamp) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        if (r < 0) return "";
        return this.keyStore.get(key).get(arr[r]);
    }
}
