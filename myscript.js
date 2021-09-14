// Part 1 - Basics
var x, y, z;
x = 5; y = 6;
z = x + y;
// var x = 5, y = 6, z=x+y;
console.log("Basics:");
console.log(z);
console.log();


// Part 2 - Data Types
var length = 9;															    //Integer	
var width = 35.5;															//Float
var firstName = "Brentea";  												//String
var hobbies = ["Dancing", 20, ["Red", "Ela", "Diana"]];							//List
var spotify = { title: "Magasin", artist: "Eraserheads", album: "Anthology" };		//Object
var opinion = false															//Boolean
// Part 2.1
console.log("Data Types:");
console.log(length + width);
console.log("My fave number is: " + length);
console.log("My Name is " + firstName);
console.log(hobbies);
console.log(spotify);
console.log(opinion);
console.log()


// Part 3 - Operators
var n, m, sum, difference, product, quotient, remainder, power;
n = 11;
m = 5;
sum = n + m;
difference = n - m;
product = n * m;
quotient = n / m;
remainder = n % m;
power = n ** m;
// Part 3.1 - Arithmetic Operators
console.log("Arithmetic Operators:");
console.log("Value of n is: ", n);
console.log("Value of m is: ", m);
console.log("Sum of n and m is: ", sum);
console.log("Difference of n and m is: ", difference);
console.log("Product of n and m is: ", product);
console.log("Quotient of n and m is: ", quotient);
console.log("Remainder of n divded by m is: ", remainder);
console.log("n raise to m is: ", power);
console.log();
// Part 3.2 - Assignment Operators
var u = 10;
u += n;
console.log("Assignment Operators:");
console.log("Answer is", u);
console.log();
// Part 3.3 - Data Types Operators (Concatenate)
var v = 5; v += 5;
var word = "Hello " + "Hi";
var comb = "Hello " + 5;
console.log("Data Types Operators:");
console.log(v);
console.log(word);
console.log(comb);
console.log();
// Part 3.4 - Comparison Operators
var q = 5; w = 6;
console.log("Comparison Operators:");
console.log(q == w);
console.log(q === w);
console.log(q != w);
console.log(q !== w);
console.log(q > w);
console.log(q < w);
console.log(q >= w);
console.log(q <= w);
console.log();
// Part 3.5 - Logical Operators
console.log("Logical Operators:");
console.log(q < w && q == w);
console.log(q > w || q != w);
console.log(!(q == w));
console.log();
// Part 3.6 - Type Operator
console.log("Type Operators:");
console.log(typeof (q));
function myComputer(model, year) {
	this.model;
	this.year;
}
var func = new myComputer("ASUS ROG", 2020);
console.log(func instanceof myComputer);
console.log()
// Part 3.7 - Bitwise Operator
console.log("Bitwise Operators:");
console.log(q & w);
console.log(q | w);
console.log(!q);
console.log(q ^ w);
console.log(q << w);
console.log(q >> w);
console.log();


// Part 4 - Conditional Statements
var val = 50;
var order;
if (val >= 100) {
	order = "Gold Plated Fishball";
}
else if (val < 100 && val >= 40) {
	order = "1pc Squidball with Caviar";
}
else {
	order = "Service Water";
}
console.log("Conditional Statements:");
console.log("My order is: " + order);
console.log();


// Part 5 - For Loop Statements
var loona = 12
console.log("For Loop:");
for (var i = 0; i <= loona - 1; i++) {
	console.log(i);
}
console.log()
// Part 5.1 - While Loop Statements
console.log("While Loop:")
var i = 0;
while (i <= loona - 1) {
	console.log(i);
	i = i + 1;
}
console.log()


// // Part 6
// window.alert("Halt! Don't enter this website");
// // Part 6.2
// if(confirm("Would You Like to Continue?")){
// 	window.alert("You may pass.");
// }
// else{
// 	window.alert("YOU SHALL NOT PASS");
// }
// // Part 6.3
// var person = prompt("Please enter your name");
// if(person == null || person == ""){
// 	alert("Prompt invalid! No name detected.");
// }
// else{
// 	alert("Welcome "+person+"!");
// }


// Part 7
function myFunction() {
	var input = document.getElementById("name").value;
	document.getElementById("amhere").innerHTML = input
}

function calculate() {
	var team1Score = 0, team2Score = 0;
	var ids = [{ "Wins": 3 }, { "Draws": 1 }, { "Losses": -1 }];
	var points = []
	var teams = [team1Score, team2Score];


	for (var k = 0; k < teams.length; k++) {
		for (var i in ids) {
			var obj = ids[i];
			for (var j in obj) {
				teams[k] += document.getElementById("team" + (k + 1) + j).value * obj[j];
			}
		}
	}

	if (teams[0] > teams[1]) {
		document.getElementById("amhere").innerHTML = "Congratulations, " + document.getElementById("team1Name").value + "!!"
	} else if (teams[0] < teams[1]) {
		document.getElementById("amhere").innerHTML = "Congratulations, " + document.getElementById("team2Name").value + "!!"
	} else {
		document.getElementById("amhere").innerHTML = "It's a TIE"
	}

	// team1Score = document.getElementById("team1Wins").value * 3
	// 	+ document.getElementById("team1Draws").value * 1
	// 	+ document.getElementById("team1Losses").value * -1;

	// team2Score = document.getElementById("team2Wins").value * 3
	// 	+ document.getElementById("team2Draws").value * 1
	// 	+ document.getElementById("team2Losses").value * -1;

	// if (team1Score > team2Score) {
	// 	document.getElementById("amhere").innerHTML = "Congratulations, " + document.getElementById("team1Name").value + "!!"
	// } else if (team2Score > team1Score) {
	// 	document.getElementById("amhere").innerHTML = "Congratulations, " + document.getElementById("team2Name").value + "!!"
	// } else {
	// 	document.getElementById("amhere").innerHTML = "It's a TIE"
	// }
	// var input = document.getElementById("name").value;
	// document.getElementById("amhere").innerHTML = input
}
