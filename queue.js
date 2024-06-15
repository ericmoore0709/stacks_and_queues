/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    // create node from val
    const newNode = new Node(val);

    if (this.last) {
      // there are existing nodes.

      // set this.last.next to newNode
      this.last.next = newNode;

      // set this.last to newNode
      this.last = newNode;

    }
    else {
      // there are no other nodes in queue.

      // set this.first *and* this.last to newNode
      this.first = this.last = newNode;
    }

    // either way, increment this.size
    this.size++;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.size) {
      // there are no nodes in here
      throw new Error(`Queue ${this} is empty.`);
    }
    else {
      // get this.first
      const first = this.first;

      // set this.first to first.next
      this.first = first.next;

      // decrement size
      this.size--;

      // return (old) this.first
      return first.val;

    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.first) {
      // there exists a first node in here
      return this.first.val;
    }
    else {
      // the queue is empty
      return null;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
