//Stored Locations without alphabetic order
let places: string[] = ["Germany", "Turkey", "pairs", "London", "Iran"];

//Print array in original order
console.log("original " + places);

//array in alphabetic order without modifying
console.log("copy " + [...places].sort());

// Array is still in its original order
console.log("original " + places);

//Print array in reverse order without changing alphabetic order
console.log("copy " + [...places].sort().reverse());

//Still original array print
console.log("original " + places);

// Reserve the order of your list. Print the array to show that its order has changed
console.log("original " + places.reverse());

//Reserve the order of your list again. Print the array to show its back to original order.
console.log("original " + places.reverse());

//Sort your array so its stored in alphabetic order. Print the array to show that its order has been changed.
console.log("original " + places.sort());

//Sort to change your array so its stored in reserve alphabetic order. Print the list to show that its order has changed.
console.log("original " + places.sort().reverse());






