class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	traverse(node) {
		const tree = { value: node.value };
		tree.left = node.left === null ? null : this.traverse(node.left);
		tree.right = node.right === null ? null : this.traverse(node.right);
		return tree;
	}

	insert(value) {
		const newNode = new Node(value);
		//check if root exists
		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					//left
					if (!currentNode.left) {
						//if there is no left child
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left; //if left child exists, move to it
				} else {
					//right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
		return this;
	}

	lookup(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (value === currentNode.value) {
				return currentNode;
			}
		}
		return false;
	}

	//remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(tree.traverse(tree.root)));
console.log(tree.lookup(9));
//			9
//		4		20
//1		6		15		170
