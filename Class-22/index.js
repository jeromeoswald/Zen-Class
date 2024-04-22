// const getContinent = (callback) => {
//     setTimeout(() => {
//         let continent = "Asia";
//         console.log(continent);
//         callback(continent);
//     },1000);
// };


// const getCountries = (callback) => {
//     setTimeout(() => {
//         let countries = "India";
//         console.log(countries);
//         callback(countries);
//     },1000);
// };

///////////
// const getStates = (callback) => {
//     setTimeout(() => {
//         let states = "TamilNadu";
//         console.log(states);
//         callback(states);
//     },1000);
// };


// const getCity = (callback) => {
//     setTimeout(() => {
//         let city = "Trichy";
//         console.log(city);
//         callback();
//     },1000);
// };

// const done = () => {
//     console.log("Done!!!");
// }


// const getAddress = () => 
// {
    
//     getStates((states) => 
//     {
//         getCity(() => 
//         {
//             done();
//         });
//     });
// };

// getAddress();


// //producer code
// let promiseObj = new Promise((resolve,reject) => {
//     console.log("Getting user name from DB....");
//     setTimeout(()=>{
//         resolve("Jerome Oswald");
//         //reject("Error 404");
//     },1000);
// });

// //console.log(promiseObj);
// //Consumer Code
// promiseObj.then((val)=>{
//     //success
//     console.log(`Name recieved from DB = ${val}`);
// },(err)=>{
//     //failure
//     console.log(`Error Occured = ${err}`);
// }
// )


// function checkPositive(number) {
//     return new Promise((resolve,reject) => {
//         if(number > 0){
//             resolve(`The Number ${number} is positive`)
//         } else {
//             reject(`Error: The Number ${number} is Negative`)
//         }
//     });
// };

// checkPositive(50).then((val)=>{
//     console.log(val);
// })
// .catch((err)=>{
//     console.log(err);
// });

// checkPositive(-50).then((val)=>{
//     console.log(val);
// })
// .catch((err)=>{
//     console.log(err);
// });


// function fetchCountryData(){
//     const url = "https://restcountries.com/v3.1/all";
//     fetch(url).then((response) =>{
//         return response.json();
//     }).then((data)=>{
//         data.forEach((country) => 
//     {
//         console.log(country.name.common + ": "+ country.flag + ", "+ country.region + ", "+ country.subregion + ", "+ country.population);
//     });
//     })
// }

// fetchCountryData();

const getName = async() =>{
    try{
        let name = await namePromise;
        console.log(`Name received from DB = $`);
    }
}



let promiseObj = new Promise((resolve,reject) => {
    console.log("Getting user name from DB....");
    setTimeout(()=>{
        resolve("Jerome Oswald");
        //reject("Error 404");
    },1000);
});