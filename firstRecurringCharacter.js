//Google question
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined

// THINKING THROUGH THE PROBLEM
//one solution could be to loop through each number and assign that to a key value in a hash table
//the value for each key would have a counter for each time that number appears in the array
//first, you would have to check if the number (key) already exists in the hash table
//if it does, add 1 to the value
//for example, it would first count 2, see that it does not exist in the table, then add it to the table with the value of 1
//next, it would do the same with 5 and 1
//once it reaches 2 again, it should see that 2 already exists in the table and increase the value by 1 to 2
//once one of the values of the hash table reach 2, the program returns the key
//to do this, the program would check every time a value is incremented to see if the value is equal to 2
//if it is, it will break the loop and return that number immediately as it is the first recurring character
//if the end of the array is reached, it will return undefined
//once one of the table

//CODE IT
function firstRecurringCharacter(array) {
	// given an array as a parameter
	characterTable = {}; //hash table that we want to store each character in
	let i = 0; //counter to increment through array

	while (i < array.length) {
		key = array[i];
		// console.log(characterTable);
		//check if the value already exists
		if (key in characterTable) {
			//if it exists, add to its value
			characterTable[key]++;
			//check if the value is equal to 2
			if (characterTable[key] === 2) {
				//get the key and return it
				return key;
			}
		} else {
			//otherwise, add it to the map with a value of 1
			characterTable[key] = 1;
			i++; //proceed through loop only if the recurring character doesn't exist
		}
	}
	return undefined; //if no repeats exist
}

//alternative method
function firstRecurringCharacter2(input) {
	let map = {};
	for (let i = 0; i < input.length; i++) {
		if (map[input[i]] !== undefined) {
			return input[i];
		} else {
			map[input[i]] = i;
		}
	}

	return undefined;
} // O(n)

//naive method
function firstRecurringCharacter3(input) {
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			//added this as part of a challenge to return 5 (instead of 2) on array d
			if (input[j] === input[j + 1]) {
				//if current index matches the one directly next to it
				return input[j];
			}
			if (input[i] === input[j]) {
				return input[i];
			}
		}
	}
}

a = [2, 5, 1, 2, 3, 5, 1, 2, 4]; //returns 2
b = [2, 1, 1, 2, 3, 5, 1, 2, 4]; //returns 1
c = [2, 3, 4, 5]; //returns undefined
d = [2, 5, 5, 2, 3, 5, 1, 2, 4]; //returns 5
console.log(firstRecurringCharacter3(d));
