let personName :string ="HiRa KhAliD";

let lowerCase :string = personName.toLowerCase();
let upperCase :string = personName.toUpperCase();
let titleCase :string = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

if(personName !== null && personName !== ""){
  console.log(`\nHello ${personName}, Here are your name in:\n
LowerCase = ${lowerCase}
UpperCase = ${upperCase}
TitleCase = ${titleCase}\n`)
}
else{
  console.log("Please fill your name! ")
}