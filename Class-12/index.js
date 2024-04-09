// function test() {
//     console.log(beforeLet);
//     console.log(beforeConst;
//         let beforeLet = 'defined';
//         let beforeConst = 'defined';
// }

// test();

// var varVariable = 1 ;
// var varVariable = 2 ;
// let letVariable = 3 ;
// let letVariable = 4 ;
// const constVariable = 5 ;
// constVariable = 6 ;

// console.log(varVariable, letVariable, constVariable);

// var welcome = 'Welcome to Sweater Season!' // globally scoped
// function fallActivities() {
//    var activities = 'buy a pumpkin and make Jack O Lantern'; 
// // locally scoped
//    console.log(`You can ${activities}`); 
//    // The `backtick`, a.k.a the template literal, is a new feature in ES6 to replace the complication of string concatenation.
// }
// console.log(welcome); // Welcome to Sweater Season!
// console.log(activities);


let firstName = "Jerome"
let lastName = "Oswald J"
let age = 27;
let city = "Trichy"

console.log("My name is " + firstName + " " + lastName + "." + "My age is " + age + "." +" I currently live in "+ city + "." );
console.log(`My name is ${firstName} ${lastName}.My age is ${age}. I currently live in ${city}.`);

function sum(x,y,z){
    return x + y+ z;
}

const numbers = [1, 2, 3]
console.log(sum(numbers[0],numbers[1],numbers[2],));
console.log(sum(...numbers));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1,...arr2]);

// let obj1 = {name: "Jerome", age:27};
// let obj2 = {role: "TL", company:"Google"};
// let combineobj = {...obj1,...obj2}
// console.log(combineobj);

function concatenatestrings(...strings){
    return strings;//.join(' ');
}
console.log(concatenatestrings("I","Love","Javascript!"));



// function concatenatestrings(...strings){
//     return strings.join(' ');
// }
// console.log(concatenatestrings("I","Love","Javascript!"));


function printUserInfo(name, age, ...hobbies){
    console.log(name,age);
    console.log("Hobbies:", hobbies.join(','));
}



printUserInfo("Jerome", 27, "Reading", "Coding", "PS")