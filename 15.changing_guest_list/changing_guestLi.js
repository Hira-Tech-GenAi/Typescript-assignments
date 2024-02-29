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
