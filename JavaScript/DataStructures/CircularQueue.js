/**
 * Initialize your data structure here. Set the size of the queue to be k.
 */
class MyCircularQueue {
    constructor(k) {
        this.head = -1;
        this.tail = -1;
        this.queue = [];
        this.queue.length = k;
    }
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    else {
        this.tail += 1;
        this.tail = this.tail % this.queue.length;
        this.queue[this.tail] = value;
        if (this.head == -1) {
            this.head = 0;
        }
        return true;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    if (this.head == this.tail) {
        this.head = -1;
        this.tail = -1;
    }
    else {
        this.head += 1;
        this.head = this.head % this.queue.length;
    }
    return true;
};

/**
 * Get the front item from the queue.
 */
MyCircularQueue.prototype.Front = function() {
    if (this.head == -1) {
        return -1;
    }
    return this.queue[this.head];
};

/**
 * Get the last item from the queue.
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.tail == -1) {
        return -1;
    }
    return this.queue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 */
MyCircularQueue.prototype.isEmpty = function() {
    if (this.head == -1) {
        return true;
    }
    return false;
};

/**
 * Checks whether the circular queue is full or not.
 */
MyCircularQueue.prototype.isFull = function() {
    if ((this.tail + 1) % this.queue.length == this.head) {
        return true;
    }
    return false;
};

/**
 * Uncomment the following lines to test
 */

var obj = new MyCircularQueue(3);
console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.enQueue(3));
console.log(obj.enQueue(4));
console.log(obj.Rear());
console.log(obj.deQueue());
console.log(obj.Front());
console.log(obj.deQueue());
console.log(obj.deQueue());
console.log(obj.deQueue());