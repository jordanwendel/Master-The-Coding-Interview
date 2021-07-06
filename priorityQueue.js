class QElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.items = [];
	}

	// functions to be implemented
	enqueue(item, priority) {
		var newElement = new QElement(item, priority);
		var contain = false;

		// iterating through entire array to add element at correct location
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].priority > newElement.priority) {
				this.items.splice(i, 0, newElement);
				contain = true;
				break;
			}
		}

		// if element has the highest priority
		// it is added at the end of the queue
		if (!contain) {
			this.items.push(newElement);
		}
	}

	dequeue() {
		// return the dequeued element and remove it
		if (this.isEmpty()) {
			return "Underflow";
		}
		return this.items.shift();
	}

	front() {
		// returns highest priority element
		if (this.isEmpty()) {
			return "No elements in queue";
		}
		return this.items[0];
	}

	rear() {
		// returns lowest priority element
		if (this.isEmpty()) {
			return "No elements in queue";
		}
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		// return true if queue is empty
		return this.items.length == 0;
	}

	printPQueue() {
		var str = "";
		for (let i = 0; i < this.items.length; i++) {
			str += this.items[i].element + " ";
		}
		return str;
	}
}

// creating object for queue classs
var priorityQueue = new PriorityQueue();

// testing isEmpty and front on an empty queue
// return true
console.log(priorityQueue.isEmpty());

// returns "No elements in Queue"
console.log(priorityQueue.front());

// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

// prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.printPQueue());

// prints Gourav
console.log(priorityQueue.front().element);

// pritns Sheru
console.log(priorityQueue.rear().element);

// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log(priorityQueue.dequeue().element);

// Adding another element to the queue
priorityQueue.enqueue("Sunil", 2);

// prints [Piyush Sumit Sunny Sunil Sheru]
console.log(priorityQueue.printPQueue());
