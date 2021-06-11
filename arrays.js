const strings = ['a', 'b', 'c', 'd'];
//4 array slots * 4 slots in memory for each = 16 bytes of storage

console.log(strings[2])

//push - add something to the end of the array
strings.push('e'); // O(1)

//pop - remove last item from the array
strings.pop(); // O(1)

//unshift - add element to start of array
strings.unshift('x'); //O(n)

//splice - insert element at given index - can remove 
strings.splice(2, 0, 'alien'); //O(n/2) -> O(n)

console.log(strings)