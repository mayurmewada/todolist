"use strict";

const add = document.querySelector(".add");

add.addEventListener("click", function () {
  let text = document.querySelector(".task").value;
  console.log(text);
  let ul = document.getElementById("a");
  let li = document.createElement("li");
  li.className = "strike";
  li.appendChild(document.createTextNode(text));
  ul.insertBefore(li, ul.firstChild);
  li.addEventListener("click", function () {
    li.classList.add("hidden");
  });
  document.querySelector(".task").value = "";
});

//let strike = document.createElement("strike");
// li.addEventListener("click", function () {});

//strike.appendChild(document.createTextNode(text));
//li.insertBefore(strike, li.firstChild);
// li.addEventListener("click", function () {
//   let strike = document.createElement("strike");
//   if (li !== strike) {
//     strike.appendChild(document.createTextNode(text));
//     li.appendChild(document.createTextNode(""));
//     li.insertBefore(strike, li.firstChild);
//   }
// });
// li.forEach(function (li) {
//   li.addEventListener("click", function () {
//     this.classList.toggle(".completed");
//   });
// });
