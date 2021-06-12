class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	// hash function
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	} // O(1)

	// set key and value pair to an address in memory that is specified by hash function
	set(key, value) {
		let address = this._hash(key);

		if (!this.data[address]) {
			this.data[address] = [];
			this.data[address].push([key, value]);
		} else {
			this.data[address].push([key, value]);
			return this.data;
		}
	} // O(1)

	// get value of key
	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];

		if (currentBucket.length) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			} // O(1) assuming no collisions
		}
		return undefined;
	}

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}

	// includes hash collision prevention
	keysNoCollision() {
		if (!this.data.length) {
			return undefined;
		}
		let result = [];
		// loop through all the elements
		for (let i = 0; i < this.data.length; i++) {
			// if it's not an empty memory cell
			if (this.data[i] && this.data[i].length) {
				// also loop through all the potential collisions
				if (this.data.length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						result.push(this.data[i][j][0]);
					}
				} else {
					result.push(this.data[i][0]);
				}
			}
		}
		return result;
	}
}

// main starts here
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
console.log(myHashTable.keys());
