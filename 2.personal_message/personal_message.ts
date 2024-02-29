let personName: string = "";

personName = prompt("What is your name?") || "";

if (personName !== null && personName !== "") {
  alert(`Hello ${personName}, Would you like to learn some Typescript today.`);
} else {
  alert("You have to fill your name! ");
}
