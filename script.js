// Assignment Code
var generateBtn = document.querySelector("#submit");
var lower = document.getElementById("RandomLower");
var upper = document.getElementById("RandomUpper");
var number = document.getElementById("RandomNumber");
var symbol = document.getElementById("RandomSymbol");
var characters = document.getElementById("RandomCharacters");
var result = document.getElementById("Result");


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
function generatePassword(lower, upper, number, symbol, characters){
  
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  console.log('typesCount:', typesCount);
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
    );
  console.log('typesArr:',typesArr);
  
  if(typesCount == 0){
    return '';
  }

  for (let i = 0; i < characters; i+= typesCount) {
    typesArr.forEach(type=> {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);
      generatedPassword += randomFunc[funcName]();
    });
   }
 const finalPassword = generatedPassword.slice(0, characters);

 return finalPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get element by id 
document.getElementById("RandomLower");

//
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
