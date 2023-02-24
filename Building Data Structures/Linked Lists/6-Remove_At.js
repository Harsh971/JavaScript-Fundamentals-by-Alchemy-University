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
    removeAt(index) {
        if((index < 0) || (index >= this.size))
        {
            return (console.log("Please enter a valid Index"));
        }
        else
        {
            var curr,prev,it=0;
            curr = this.head;
            prev = curr;

            if(index === 0)
            {
                this.head = curr.next;
            }
            else
            {
                while(it < index)
                {
                    it += 1;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size -= 1;
            
        }
        return curr.element;
    }
}

module.exports = LinkedList;