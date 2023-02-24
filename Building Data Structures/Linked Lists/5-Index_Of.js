class LinkedList {
    constructor() {
        this.head = null;
    }
    addFirst(node) {
        const temp = this.head;
        this.head = node
        node.next = temp;
    }
    addLast(node) {
        if(this.head == null){
            this.addFirst(node);
        }
        else {
            let current;
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node
        }
    }
    indexOf(node) {
        var count = 0;
        var current = this.head;
        while(current != null)
        {
            if(current === node)
            {
                return count;
            }
            count += 1;
            current = current.next;
        }
    }
}

module.exports = LinkedList;