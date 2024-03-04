let guest_list: string[] = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];

let absent_Guest: string = "Quaid-e-Azam";
let new_Guest: string = "Bill Gates";
guest_list[0] = new_Guest;

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear Sir, " +
      guest_list[i] +
      ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n"
  );
}
console.log(`Sir ${absent_Guest} is not coming to the party.`);
console.log(
  "Good news! We find Big Table so we are inviting three more guest."
);
//Add three guest
guest_list.unshift("Sir Daniyal Nagori");
guest_list.splice(2, 0, "Sir Ameen");
guest_list.push("Sir Hamza");
//Print six guest array
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear Sir, " +
      guest_list[i] +
      ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n"
  );
}
//Sorry massage
console.log(
  "\nSorry we can't arrange Big Table, only two people will be invited."
);
//Remove guest
while (guest_list.length > 2) {
  let remove_Guest = guest_list.pop();
  console.log(`Sorry Sir ${remove_Guest}, You are not invited for party.`);
}
//Remaining two guest
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear Sir, " +
      guest_list[i] +
      ",\n\nYou are still invited.\n\nThank you!\n\n"
  );
}
//Remove all guest
guest_list.splice(0, 2);
console.log(guest_list);
