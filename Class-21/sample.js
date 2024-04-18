// const interval = setInterval(() => {
//     console.log("Hello From SetInterval Log!!");
// },1000);
// setInterval(() => {
//     console.log("Hello From Settimeout Log!!");
//     clearInterval(interval);
// },5000);



// const functionOne = () =>{
//     console.log("Hey, this is Function One!!");

// functionTwo();

// // setInterval(() => {
// console.log("Hey, this is Function One Part 2!!");
// };
// // },1000);


// const functionTwo = () =>{
//     setTimeout(() => console.log("Hey, this is Function Two!!"),1000);
// }

// functionOne();

// const getUserName = (name, callback) => {
//     console.log("Parameter 1: "+ name);
//     console.log("Parameter 2: " + callback);
//     setTimeout(() => {
//         console.log("we have a user to display");
//         callback({ user: name});
//     }, 3000);
// };

// const user =getUserName("Guvi Jerome",(user) =>{
//     console.log(user);
// });




// const getUserName = (userName, callback) => {
//         setTimeout(() => {
//             console.log("we have a user name to display");
//             callback(userName);
//         }, 1000); 
//     };

//     const getUserAge = (userName, callback) => {
//         setTimeout(() => {
//             console.log("we have a user Age to display");
//             callback(userName+" "+ 27);
//         }, 1000); 
//     };

//     const getUserDesigination = (userName, age, callback) => {
//         setTimeout(() => {
//             console.log("we have a user desigination to display");
//             callback(userName +" "+ 27 + " " + "Software Developer!!!");
//         }, 1000); 
//     };

//     const user =getUserName ("Jerome Oswald", (userName) => {
//         console.log(userName);
//         getUserAge(userName,(userNameWithage) => {
//             console.log(userNameWithage);
//             getUserDesigination(userName, 27, (userNameWithagedesignation) => {
//                 console.log(userNameWithagedesignation); 
//             });
//         });
//     });

let promiseObj = new Promise((resolve,reject) => {
    console.log("Getting user name from DB....");
    setTimeout(()=>{
        //resolve("Jerome Oswald");
        reject("Error 404");
    },1000);
});

//console.log(promiseObj);
promiseObj.then((val)=>{
    //success
    console.log(val);
},(err)=>{
    //failure
    console.log(err);
}
)