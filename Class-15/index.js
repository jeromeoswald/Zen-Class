// const button = document.querySelector("button"); //select button element from th HTML
// button.addEventListener("click",() => {
//     document.body.style.backgroundColor = "gold";
// })

// // const button = document.querySelector("button"); //select button element from th HTML
// // button.addEventListener("click",() => {
// //     document.body.style.backgroundColor = "gold";
// // })

// // function setBGColor() {
// //     document.body.style.backgroundColor = "gold"
// // }

// let person = {
//     name: "Jerome Oswald",
//     age: 27,
//     place: "Trichy",
// }

// console.log("======================");
// console.log("Name", button);
// console.log("======================");

// const thirdli = document.getElementById("third-li");
// console.log("======================");
// console.log(thirdli);
// console.log("======================");

// const firstli = document.querySelector("li");
// console.log("======================");
// console.log(firstli);
// console.log("======================");


// const itemList = document.querySelectorAll("li");
// console.log("======================");
// console.log(itemList);
// console.log(itemList.length);
// console.log("======================");

// itemList.forEach((li) => {
//     console.log(li);
// });

// const listItem = document.getElementsByClassName("list-item");
// console.log("======================");
// console.log(listItem);
// console.log("======================");

// const listItems = document.querySelectorAll("li");
// listItems[0].style.color = "red";
// listItems[1].style.color = "blue";
// listItems[2].style.color = "orange";

// listItems[0].textContent = "JackFruit";

// listItems[0].setAttribute("class","big gold");
// listItems[2].setAttribute("class","gold");
// listItems[0].classList.remove("big");

// const listItems = document.querySelectorAll("li");

// const p = document.createElement("p");
// p.textContent= "GUVI FSDWD58-T";

// Document.body.prepend(p);

// const ele = document.getElementById("sample");
// console.log("TextContent: ", ele.textContent);
// console.log("InnerHTML: ", ele.innerHTML);
// console.log("InnerText: ", ele.innerText);

// const p = document.createElement("p");
// p.textContent= "GUVI FSDWD58-T";
// console.log("TextContent: ", p.textContent);
// console.log("InnerHTML: ", p.innerHTML);
// console.log("InnerText: ", p.innerText);

const parent = document.getElementById("parent");
const child = document.getElementById("div");
child.innerText="This is child!!";
parent.append(child,"This is Sibiling node","additional");






