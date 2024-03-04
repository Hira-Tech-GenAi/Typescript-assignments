"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas
let favoriteFruits = ["Strawberry", "Mango", "Banana"];
if (favoriteFruits.includes("Strawberry")) {
    console.log("I love to eat strawberry.");
}
if (favoriteFruits.includes("Mango")) {
    console.log("I love to eat Mango.");
}
if (favoriteFruits.includes("Banana")) {
    console.log("I love to eat Banana.");
}
//This will not be printed as you instructed in question.
if (favoriteFruits.includes("Apple")) {
    console.log("I love to eat Apple");
}
if (favoriteFruits.includes("Orange")) {
    console.log("I love to eat Orange.");
}
