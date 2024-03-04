"use strict";
let personName = "";
personName = prompt("What is your name?") || "";
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
let titleCase = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
if (personName !== null && personName !== "") {
    alert(`Hello ${personName}, Here are your name in:
  LowerCase = ${lowerCase}
  UpperCase = ${upperCase}
  TitleCase = ${titleCase}`);
}
else {
    alert("Please fill your name! ");
}
