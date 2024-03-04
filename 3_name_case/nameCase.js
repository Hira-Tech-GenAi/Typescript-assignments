"use strict";
let personName = "HiRa KhAliD";
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
let titleCase = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
if (personName !== null && personName !== "") {
    console.log(`\nHello ${personName}, Here are your name in:\n
LowerCase = ${lowerCase}
UpperCase = ${upperCase}
TitleCase = ${titleCase}\n`);
}
else {
    console.log("Please fill your name! ");
}
