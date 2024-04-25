function testVar(){
    var x= 52;
    if(true){
        var x =65;
        document.getElementById("output").innerText = "Inside id-block: " + x;
    }
    document.getElementById("output").innerText += " | Outside id-block: " + x;
}

function testLet(){
    let y = 32;
    if(true){
        let y = 75;
        document.getElementById("output").innerText = "Inside id-block: " + y;
    }
    document.getElementById("output").innerText += " | Outside id-block: " + y;
}


function testConst(){
    const z = 32;
        document.getElementById("output").innerText = "Const z: " + z;
    try{
        z = 76;
    } catch (error){
    document.getElementById("output").innerText += " | Error: " + z;
    }
}