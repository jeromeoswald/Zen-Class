document.querySelector("h1"),addEventListener("click", function(event){
    document.querySelector("#coordinateSpan").textContent ="x:" + event.clientX + ", y:" + event.clientY
});

document.querySelector("#element").addEventListener("mouseover", function(){
    this.style.color ="red";
    this.style.blackgroundColor = "black";
})

document.querySelector("#element").addEventListener("mouseout", function(){
    this.style.color ="white";
    this.style.blackgroundColor = "black";
})


function displayText(){
    var userInput = prompt("ENTER SOME TEXT:");
    document.querySelector("#displaySpan").textContent = userInput;
}

document.querySelector("#myTextarea").addEventListener("input", function(){
    var charCount = this.value.length;
    document.querySelector("#charCountDisplay").textContent = "Character Count:" + charCount;
})


document.querySelector("#myForm").addEventListener("submit", function(){
    var inputField = document.querySelector("#inputField").value;
    if (inputField==""){
        alert("input cannot be empty!!");
        event.preventDefault();
    }
})

document.querySelector("#enterfullScreen").addEventListener("click", function(){
    document.documentElement.requestFullscreen();
})


document.querySelector("#exitfullScreen").addEventListener("click", function(){
    if (document.fullscreenElement){
        document.exitFullscreen();
    }
    document.documentElement.requestFullscreen();
})


document.querySelector("#editableContent").addEventListener("mouseover", function(){
    this.contentEditable = true;
    this.focus();
})

document.querySelector("#editableContent").addEventListener("mouseout", function(){
    this.contentEditable = false;
    this.focus();
})

 document.addEventListener('keydown',function(event){
    // if(event.key === " "){
    //     alert("Thank You...");
    //     window.close();
    // } else {
    //     alert("Invalid Key Pressed...");
    // }
 })

 function ConvertAndDisplay() {
    var number = parseInt(document.getElementById("numberInput").value);
    var type = document.getElementById('conversionType').value;
    var result = "";
    if(type ==="binary"){
        result = number.toString(2);
    } else if (type ==="hexadecimal"){
        result = number.toString(16).toUpperCase();
    }
    document.getElementById("conversionResult").textContent = "Result:" + result;
 }