/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {

    // create new node from val
    const newNode = new Node(val);

    if (this.first) {
      // nodes exists / stack not empty

      // newNode's next is this.first
      newNode.next = this.first;

      // this.first = newNode
      this.first = newNode;

    }
    else {
      // no other nodes exists / stack empty

      // newnode is both this.first and this.last
      this.first = this.last = newNode;
    }

    // either way, increment size
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    if (this.isEmpty()) {
      // there are no nodes

      // throw error
      throw new Error(`Stack ${this} is empty.`);
    }
    else {
      // nodes exist

      // get this.first
      const first = this.first;

      // first.next becomes this.first
      this.first = first.next;

      // decrement size
      this.size--;

      // return first.val
      return first.val;

    }

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.first) {
      return this.first.val;
    }
    else {
      return null;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
