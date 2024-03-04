"use strict";
// Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
let age = 25;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age <= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder");
}
