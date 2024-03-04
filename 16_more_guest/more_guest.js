"use strict";
let guest_list = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];
let absent_Guest = "Quaid-e-Azam";
let new_Guest = "Bill Gates";
guest_list[0] = new_Guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Sir, " +
        guest_list[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n");
}
console.log(`Sir ${absent_Guest} is not coming to the party.`);
console.log("Good news! We find Big Table so we are inviting three more guest.");
guest_list.unshift("Sir Daniyal Nagori");
guest_list.splice(2, 0, "Sir Ameen");
guest_list.push("Sir Hamza");
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Sir, " +
        guest_list[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n");
}
