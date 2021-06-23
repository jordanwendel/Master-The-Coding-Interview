class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		// O(1)
		const newNode = new Node(value);
		this.tail.next = newNode; // tail points to new value
		this.tail = newNode; // new node is now the tail
		this.length++;
		return this;
	}

	prepend(value) {
		// O(1)
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(index, value) {
		// O(n)

		// check params
		if (index === 0) {
			return this.prepend(value);
		}
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = new Node(value);
		const leader = this.traverseToIndex(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode; // point to new node
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}

	delete(index) {
		// check params
		if (index === 0) {
			this.head = this.head.next;
			return this.printList();
		}
		if (index >= this.length) {
			this.removeTail();
			return this.printList();
		}

		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	removeTail() {
		let pre = this.head;
		let temp = this.head.next;
		while (temp.next !== null) {
			pre = pre.next;
			temp = temp.next;
		}
		pre.next = null;
		this.tail.next = pre;
		return pre;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 15);
console.log(myLinkedList.printList());
myLinkedList.delete(10);
console.log(myLinkedList.printList());
//console.log(myLinkedList);
