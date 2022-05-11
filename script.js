// Assignment Code
var generateBtn = document.querySelector("#submit");
var lower = document.getElementById("RandomLower");
var upper = document.getElementById("RandomUpper");
var number = document.getElementById("RandomNumber");
var symbol = document.getElementById("RandomSymbol");
var characters = document.getElementById("RandomCharacters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lower.checked, upper.checked, number.checked, symbol.checked, characters.value);
  var passwordText = document.querySelector("#password");
  console.log(lower.checked);
  console.log(upper.checked);
  console.log(number.checked);
  console.log(symbol.checked);
  console.log(characters.value);
  passwordText.value = password;
}

// later
function generatePassword(lower2, upper2, number2, symbol2, characters2){
  var text ="";
  for (let i = 0; i < characters2; i++) {
    text += getRandomLower() + "<br>";
  }
return text;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get element by id 
document.getElementById("RandomLower");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Lower Case

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Upper case 

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Number 

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(upper);
