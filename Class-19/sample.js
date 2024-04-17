// function sum(x,y){
//     return x + y;
// }

// function multiply(x,y){
//     return x * y;
// }

// function div(x,y){
//     return x / y;
// }

// function getResult(x,y,operation){
//     return operation(x,y);
// }

// console.log(getResult(10,20,sum));
// console.log(getResult(2,5,multiply));
// console.log(getResult(10,5,div));


let add = (callback) =>{
    let x=2,y=3;
    console.log("Sum:", x + y);
    callback();
};

add(function(){
    console.log("Finished this Operation!!");
});

let sub = (callback) =>{
    let x=10,y=3;
    console.log("Difference:", x - y);
    callback();
};

sub(function(){
    console.log("Finished this Operation!!");
});

add(displayCompletion);
sub(displayCompletion);
