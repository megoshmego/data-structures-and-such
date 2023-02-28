class Deque {
    constructor() {
        this.front = this.back = undefined;
    }
    addFront(value) {
        if (!this.front) this.front = this.back = { value };
        else this.front = this.front.next = { value, prev: this.front };
    }
    removeFront() {
        let value = this.peekFront();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.front = this.front.prev).next = undefined;
        return value;
    }
    peekFront() { 
        return this.front && this.front.value;
    }
    addBack(value) {
        if (!this.front) this.front = this.back = { value };
        else this.back = this.back.prev = { value, next: this.back };
    }
    removeBack() {
        let value = this.peekBack();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.back = this.back.next).back = undefined;
        return value;
    }
    peekBack() { 
        return this.back && this.back.value;
    }
}

// demo
let deque = new Deque;
console.log(deque.peekFront()); 
deque.addFront();
console.log(deque.peekBack()); 
deque.addFront();
console.log(deque.removeBack()); 
deque.addFront();
deque.addFront();
console.log(deque.peekBack()); 
deque.addBack();
deque.addBack();
console.log(deque.peekBack());
console.log(deque.removeFront()); 
console.log(deque.removeFront()); 
console.log(deque.removeFront());
console.log(deque.removeFront()); 
console.log(deque.removeFront()); 
console.log(deque.removeFront()); 
