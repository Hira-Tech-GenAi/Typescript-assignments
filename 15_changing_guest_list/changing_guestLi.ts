let guest_list: string[] = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];

let absent_Guest: string = "Quaid-e-Azam";
let new_Guest: string = "Bill Gates";
guest_list[0] = new_Guest;

for (let i = 0; i < guest_list.length; i++) {
  console.log("Dear Sir, " + guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!");
}
console.log(`Sir ${absent_Guest} is not coming to the party.`);
