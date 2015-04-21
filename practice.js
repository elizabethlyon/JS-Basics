//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
	if (name === 'Tyler') {
		return true;
	}
	return false;
};

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function(input) {
	var name = prompt("What is your name?");
	return name;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
	getName();
	alert("Welcome " + name);
}


//Next problem




//What is the difference between arguments and parameters?

A parameter is a general variable/definition for a function. An argument is what is actually pulled into the
function.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


Truthy values are strings, numbers, functions. Falsy values are null, undefined, NaN, "" (empty string) and 0. To check
for falsiness, you can have an expression like

var a = (a === false);
var b = (b === true);


//Next Problem



//Create a function called myName that returns your name

var myName = function(input) {
	var name = prompt("What is your name?");
	return name;
}


//Now save the function definition of myName into a new variable called newMyName

var myNewName = myName();

//Now alert the result of invoking newMyName

alert(myNewName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
	return myName();
}


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = myName;

//Now invoke innerFn.

innerFn();