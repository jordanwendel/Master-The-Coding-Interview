class HashTable
{
	constructor(size)
	{
		this.data = new Array(size);
	}

	// hash function
	_hash(key)
	{
		let hash = 0;
		for (let i = 0; i < key.length; i++)
		{
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	// set key and value pair to an address in memory that is specified by hash function
	set(key, value)
	{
		let address = this._hash(key);

		if (!this.data[address])
		{
			this.data[address] = [];
			this.data[address].push([key, value]);
		}
		else
		{
			this.data[address].push([key, value]);
			return this.data;
		}
	}

	// get value of key
	get(key)
	{
		let address = this._hash(key);
		const currentBucket = this.data[address];
		
		if (currentBucket.length)
		{

		}
		return undefined;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
console.log(myHashTable.get('grapes'));
