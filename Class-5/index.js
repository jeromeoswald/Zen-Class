// const a = 1, b = 2, c = 3;
// const array = [a, b, c];

// console.log(array); // Output: [1, 2, 3]
// console.log(a)


// function numbers(a, b, ...c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);      
// }
// numbers('1', '2', '3', '4', '5');


// const num = [1,2,3]
// const[a,b,c] = num;
// console.log(a);
// console.log(b);
// console.log(c); 

// const arr1 =[1,2,3]
// const arr2 =[4,5,6]


// const person ={
// Name: "Jerome Oswald Ebenezer J",
// Age: 27,
// };

// const { Name: YourName, Age: YourAge } = person;

// console.log("Name:", YourName);
// console.log("Age:", YourAge);

function createEmployeeReports(employees) {
    const reports = [];
    for (let i = 0; i < employees.length; i++){
        const {name, department ,email} = employees[i];
        const report = `Name: ${name}, Department: ${department}, Emailid: ${email}`;
        reports.push(report)
    }
return reports

}

const employees = [
{
    name: "employee1", 
    age: 27, 
    department: "sales", 
    email: "employee1@gmail.com"
},
{
    name: "employee2", 
    age: 28,
    department: "development", 
    email: "employee1@gmail.com"
},
{
    name: "employee3", 
    age: 26, 
    department: "Marketing", 
    email: "employee1@gmail.com"
},
{
    name: "employee4", 
    age: 25, 
    department: "management",
    email: "employee1@gmail.com"
},];

// function createEmployeeReports(employees) {
//     return employees.map(employee => `Employee = ${employee.name}, Age = ${employee.age} , Department = ${employee.department}, EamilId ${employee.email}`);
// }

const reports = createEmployeeReports(employees);
console.log(reports);

// var a;
// var b = null;
// console.log();


var shape = 
{
    is2D: true,
};

var circle = 
{
    radius: 3,
};

var rectangle = 
{
    length:1,
    breadth: 2,
}
circle.__proto__ = shape;
console.log("Is Circle a 2D Shape :" + circle.is2D);
console.log("Radius of circle: " + circle.radius);

rectangle.__proto__ = shape;
console.log("Is Rectangle a 2D Shape :" + rectangle.is2D);
console.log("Length of Rectangle :" + rectangle.length + " Breadth of Rectangle :" + rectangle.breadth);
