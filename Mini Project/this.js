document.getElementById("traditionalBtn").addEventListener("click", function(){
    document.getElementById("traditionalOutput").innerText =
    "'this' is Traditional Function: " + this.textContent;
});

document.getElementById("arrowBtn").addEventListener("click", () => {
    document.getElementById("thisArrowOutput").innerText =
    "'this' is Arrow Function: " + this;
});