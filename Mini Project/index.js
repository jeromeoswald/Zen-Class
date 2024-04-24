const employees = [
    {id: 1, name : "Jerome", designation : "Developer"},
    {id: 2,name : "Oswald", designation : "Software"},
    {id: 3,name : "Ram", designation : "ui/ux"},
    {id: 4,name : "Jack", designation : "DevOps"},
    {id: 5,name : "Ram", designation : "DevOps"},
    {id: 6,name : "Pradeep", designation : "Hardware"},
    {id: 7,name : "Jerome", designation : "Manager"},
];

// console.log(employees.filter((emp) => emp.name == "Ram" && emp.designation == "DevOps"));
//console.log(employees.filter((emp) => !(emp.id == 5)));
console.log(employees.filter((emp) => emp.id != 5));