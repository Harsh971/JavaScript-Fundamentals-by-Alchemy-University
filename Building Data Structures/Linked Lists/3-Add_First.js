class LinkedList {
    constructor() {
        this.head = null;
    }
    addFirst(node) {
        const temp = this.head;
        this.head = node
        node.next = temp;
    }
}

module.exports = LinkedList;