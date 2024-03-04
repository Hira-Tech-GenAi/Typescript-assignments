//Equality and inequality Test
console.log("Equality test with string: ", "Banana" === "Banana");

//Equality and inequality Test
console.log("inequality test with string: ", ("Banana" as string)!== "Apple");

//Tests using lowercase Function
console.log("Lowercase function test: ", "HELLO WORLD!".toLowerCase() === "hello world!");

//Numerical test involving equality 
console.log("Equality test with number: ", 89 === 89);

//Numerical test involving  inequality
console.log("Equality test with number: ", (29 as number )!== 89);

//Greater than 
console.log("Greater than test: ", 13 > 11);

//less then
console.log("Greater than test: ", 4 < 11);

// Greater than or equal to
console.log("Greater than or equal to test: ", 11 >= 11);

//less than or equal to
console.log("Less than or equal to test: ", 11 >= 11);

// Testing "and" and "or" conditions
console.log(" 'and' operator test: ", 3===3 && 9 > 5);

//"or" conditions
console.log(" 'and' operator test: ", 3===3 || false);

//Test whether an item is in a array
const fruitsItem: string[] = ["Apple", "Orange", "Banana"];
console.log("Test 'Orange' in the array: ", fruitsItem.includes("Orange"));

//Test whether an item is not in a array
console.log("Test 'Pineapple' in the array: ", !fruitsItem.includes("Pineapple"));

















