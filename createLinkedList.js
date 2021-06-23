//10-->5-->16

// let myLinkedList = {
//     head: { // first item in linked list
//         value: 10, // value of the node
//         next: { // pointer to next node
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
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
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {\
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

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);