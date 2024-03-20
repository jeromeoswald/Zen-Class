//copy by value

var myAge = 27;
var myFriendAge = myAge;

console.log("My Age is:", myAge);
console.log("My Friend Age is:", myFriendAge);

myFriendAge = myFriendAge + 1;

console.log("My Age After BD:", myAge);
console.log("My Friend Age After BD:", myFriendAge);

//copy by reference

var myToyBox = {toy: "Car"};
var myFriendToyBox = myToyBox;
// {} - object
// [] - Array
console.log("My Toy is:", myToyBox);
console.log("My Friend Toy is:", myFriendToyBox);

myToyBox.toy= "Rocket"

console.log("My Toy After Change :", myToyBox);
console.log("My Friend Toy After Change:", myFriendToyBox);

//Array
var address = [27, "Jerome's Road", "Trichy"]

console.log("Array Address:", address[0],address[1],address[2]);

//Object
var addressNew = {Door_No: 14, apt: "Jack's Road", city: "Chennai"};

console.log("Object Number:", addressNew.Door_No, addressNew.apt, addressNew.city);

function sum(num1, num2, text)
{
    return text + ": " + (num1 + num2);
}

console.log(sum(5,2, "Small Integer"));
console.log(sum(100000,30000, "Big Integer"));

// console.log("x -", x);
// var x = 200;

add(100, 200, 300);

function add(x,y,z)
{
    console.log(x+y+z);
}

var x = 100; //gobal

function display()
{
    var x =200;//local
    console.log("Inner:", x);
}

function displayNew()
{
    var x =300;//local
    console.log("InnerdisplayNew:", x);
}

display();
displayNew();


