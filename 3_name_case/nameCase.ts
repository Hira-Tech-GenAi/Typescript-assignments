let personName :string ="";

personName = prompt("What is your name?")||"";

let lowerCase :string = personName.toLowerCase();
let upperCase :string = personName.toUpperCase();
let titleCase :string = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

if(personName !== null && personName !== ""){
  alert(`Hello ${personName}, Here are your name in:
  LowerCase = ${lowerCase}
  UpperCase = ${upperCase}
  TitleCase = ${titleCase}`)
}
else{
  alert("Please fill your name! ")
}