// var firstName = "Goodwin";
// console.log(span);
// console.log( typeof span );
// span.innerHTML = firstName;

function displayName() {
    let span = document.getElementById("name");
    let firstName = document.getElementById("firstName").valueAsNumber;
    let lastName = document.getElementById("lastName").valueAsNumber;
    span.innerHTML = firstName + lastName;
}

// for(var i = 1; i <= 10; i++ ){
//     if ( i % 2 == 1){
//         console.log(i);
//     }
// }

// var groceryList = ["milk", "coffee", "rice", "eggs"];
// var fruits = [
//     {name: "Apple", price: 20}, 
//     {name: "Banana", price: 12},
//     {name: "Orange", price: 50}
// ];

// var vegetables = [
//     {name: "kangkong", price: 40} ,
//     {name: "sibuyas", price: 5} ,
//     {name: "bawang", price: 6}
// ];


// var sum = 0;
// for(var i in vegetables){
//     console.log(vegetables[i].name + " -> " + vegetables[i].price + " PHP");
//     sum += vegetables[i].price;
// }

// console.log(sum);
// console.log( groceryList.length);

// for(var i = 0; i < groceryList.length; i++){
//     console.log(groceryList[groceryList.length -1 - i]);
// }

// groceryList.sort();
// for(var i in groceryList){
//     console.log(groceryList[i]);
// }


// while ( prompt("What is your age?") < 18 ){
//     alert("You are not allowed here");
// }

// var number = 1;
// while (number < 30){
//     console.log(number);
//     number--;
// }


// document.getElementById("name").innerHTML = firstName;

// function displayName(){
//     span.innerHTML = document.getElementById("firstName").value;
// }



var firstname = "Goodwin Chua";
firstname = firstname.toLowerCase();

console.log(firstname);
console.log(firstname.length);
for (var i = 0; i < firstname.length; i++) {
    console.log(firstname[i]);
}
