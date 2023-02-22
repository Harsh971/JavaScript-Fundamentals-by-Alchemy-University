const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if(this.items.length >= MAX_STACK_SIZE) throw Error("No Space")
        try {
            this.items.push(item);
        } catch(err) {
            throw Error("error")
        }
        
    }
    pop() {
        if (this.items.length === 0) throw Error("No Element")
        try {
            return this.items.pop();
        } catch (err) {
            throw Error("error")
        }
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

module.exports = Stack;
