class ArrayStack {
	constructor() {
		this.array = [];
	}
	peek() {
		return this.array[this.array.length - 1];
	}
	push(value) {
		this.array.push(value);
		return this;
	}
	pop() {
		this.array.pop();
		return this;
	}

	//isEmpty
}

const myStack = new ArrayStack();
myStack.push("discord");
myStack.push("udemy");
myStack.push("google");

myStack.pop();
// myStack.pop();
// myStack.pop();
console.log(myStack);
