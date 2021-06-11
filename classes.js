//reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

let ans = object1 === object2;
let ans2 = object1 === object3;
object1.value = 15;
let ans3 = object2.value;
let ans4 = object3.value;
console.log(ans4);

//context vs scope
const object4 = {
	a: function() {
		console.log(this);
	}
}

object4.a();

//instantiation
class Player {

	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this);
	}

	play() {
		console.log(`WEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
wizard1.play();
wizard2.play();