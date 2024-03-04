"use strict";
//Written by: Hira Khalid
// array for usernames
let usernames = ['admin', 'Hira', 'Javeriya', 'anshara', 'Iqra'];
// Checking User array
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Removimg all usernames from the array
    usernames = [];
    console.log("All usernames have been removed. " + usernames.length);
}
