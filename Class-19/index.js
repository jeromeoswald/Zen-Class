// function addition(a,b) {
//     var c;
//     setTimeout(() =>{
//         c=a+b;
//     },3000);
//     return c;
// }

// var result = addition(10,40);
// console.log(result);


///////////////////////////////


// const display = () => {
//     console.log("Hey");
//     displayHello();
// }

// const displayHello = () => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("I'm executed at last!!");
//     },2000);
//     displayHi()
// }
// const displayHi = () => {
//     console.log("Hi");
// }

// display();

////////////////////////////////// 


console.log("Start of the Script!!!");

// setImmediate (() => {
//     console.log("Immediate Callback");
// })

setTimeout (() => {
    console.log("Timeout Callback");
},0);

setTimeout (() => {
    console.log("Timeout Callback - 2");
},0);

console.log("End of the Script!!!");