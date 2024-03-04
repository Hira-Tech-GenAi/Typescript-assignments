"use strict";
let guest_list = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];
let absent_Guest = "Quaid-e-Azam";
let new_Guest = "Bill Gates";
guest_list[0] = new_Guest;
// for (let i = 0; i < guest_list.length; i++) {
//   console.log("Dear Sir, " + guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!");
// }
console.log(`Sir ${absent_Guest} is not coming to the party.\n`);
console.log("Good news! We find Big Table so we are inviting three more guest.\n");
//Add three guest
guest_list.unshift("Sir Daniyal Nagori");
guest_list.splice(2, 0, "Sir Ameen");
guest_list.push("Sir Hamza");
//Print six guest array
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Sir, " + guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!");
}
//Sorry massage
console.log("\nSorry we can't arrange Big Table, only two people will be invited.\n");
//Remove guest
while (guest_list.length > 2) {
    let remove_Guest = guest_list.pop();
    console.log(`Sorry Sir ${remove_Guest}, You are not invited for party.`);
}
//Remaining two guest
for (let i = 0; i < guest_list.length; i++) {
    console.log("\nDear Sir, " + guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!");
}
//Remove all guest
guest_list.splice(0, 2);
console.log(`Guest Quantity in array: ${guest_list.length}`);
