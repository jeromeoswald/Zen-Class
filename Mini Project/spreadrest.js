function testSpread(){
    const num1 = [1,2,3];
    const num2 = [4,5,6];
    const combined = [...num1,...num2];
    document.getElementById("spreadRestOutput").innerHTML=`Combined Array: ${combined}`
}

function testRest(...args){
    document.getElementById(
        "spreadRestOutput"
    ).innerHTML += ` | sum: ${args.reduce((acc, cur) => acc + cur, 0)}`
}
