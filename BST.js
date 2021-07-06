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

	remove(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						// if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesn't have a left child
				} else if (currentNode.right.left === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						currentNode.right.left = currentNode.left;

						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent< current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the right child's left most child
					let leftMost = currentNode.right.left;
					let leftMostParent = currentNode.right;
					while (leftMost.left !== null) {
						leftMostParent = leftMost;
						leftMost = leftMost.left;
					}

					//parent's left subtree is now leftMost's right subtree
					leftMostParent.left = leftMost.right;
					leftMost.left = currentNode.left;
					leftMost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftMost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftMost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftMost;
						}
					}
				}

				return true;
			}
		}
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);

console.log(JSON.stringify(tree.traverse(tree.root)));
//			9
//		4		20
//1		6		15		170
