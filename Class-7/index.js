
// class Animal {
//     moves = true;
// }

// class Rabbit extends Animal {
//     eats = true;
// }

// let a1 = new Animal();
// console.log(a1.moves);

// let a2 = new Rabbit();
// console.log(a2.eats);
// console.log(a2.moves);

//Classes

// class Animal 
// {
//     constructor()
//     {
//         console.log("This is constructor from Animal Class");
//     }
//     moves = true;
// }

// class Rabbit extends Animal 
// {
//     constructor()
//     {
//         super();
//         console.log("This is constructor from Rabbit Class");
//     }
//     eats = true;
// }

// let r = new Rabbit();

var name = 100;
var id = 200;
var company = "Pg";


class Person 
{
    constructor(name)
    {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Employee extends Person 
{
    constructor(name,id,company)
    {
        super(name);
        this.id = id;
        this.company = company;
    }
    getId(){
        return this.id;
        //return id;
    }
    getCmp()
    {
        return this.company;
    }
}

let emp = new Employee("Jerome Oswald J","E101", "BHC");
console.log("Employee get name:", emp.getName());
console.log("Employee get id:", emp.getId());
console.log("Employee get Company:", emp.getCmp());

// var a = 100;
// var b = 200;


// let operation = {
//     a:1,
//     b:2,
//     add: function(){
//         console.log(`Method: a = ${this.a}, b =${this.b}`);
//         var print = ()=> {
//             console.log(`Normal Function: a = ${this.a}, b =${this.b}`);
//         }
//         print();
//     }
// }
// operation.add();

//Normal
let a =[10, 20, 30];

// let result = [];

// for (let i = 0; i < a.length; i++)
// {
//     result.push(a[i] * 5);
// }
// console.log(result);

// let result= a.map(function(item)
// {
//     return item * 5;
// })
// console.log(result);



//map,filter,reduce
let x =[100, 200, 300];

let mapResult = x.map((item) => 
{
    return item * 10;
});
let filterResult = x.filter((item) => 
{
    return item > 10;
});

console.log(mapResult);
console.log(filterResult);


let z =[1, 2, 3, 4, 5, 6, 7];
let reduceResult = z.reduce((x,y) => 
{
    console.log("X: ",x, "Y: ", y);
    return x + y;

});
console.log(reduceResult);

var input = [23, 45, 678, 90, 33, 21, 780, 670, 498, 58940, 656, 900, 370, 1299, 1300];

let filterInput = input.filter((item) => 
{
    return item % 3;
});
console.log(filterInput);