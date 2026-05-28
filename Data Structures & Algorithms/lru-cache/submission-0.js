 class ListNode {
        constructor(key , value) {
            this.next = null;
            this.val = value;
            this.key = key;
            this.prev = null;
        }

      
    }
class LRUCache {
   
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;

        this.head = new ListNode(0 , 0);
        this.tail = new ListNode(0 , 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    add(node) {
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)) {
            const node = this.map.get(key);
            this.remove(node);
            this.add(node);
            return node.val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            this.remove(this.map.get(key));
        }
        const newNode = new ListNode(key , value);
        this.map.set(key , newNode);
        this.add(newNode);

        if(this.map.size > this.capacity) {
            const lru = this.head.next;
            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}
