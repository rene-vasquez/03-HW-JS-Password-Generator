// Assignment Code
var generateBtn = document.querySelector("#generate");

var choiceCharacters= ""

var lowercase= "abcdefghijklmnopqrstuvwxyz";
var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num= "0123456789";
var specchar= "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword () {

alert ("Let's make a password!");
var type = prompt ("Choose what type of characters you would like separated by commas \n L = 'Lowercase Characters' \n U = 'Uppercase Characters' \n N = 'Numbers' \n S = 'Special Characters'");
var passwordLength = prompt ("How many characters would you like your password to be? \n Min: 8 Characters \n Max: 128 Characters");

var typeChoices = type.split(',')

let password = "";

var lowercaseChoice = "";
var uppercaseChoice = "";
var numChoice = "";
var speccharChoice = "";

console.log (typeChoices);

if (typeChoices.includes("L")) {lowercaseChoice = true;}

if (typeChoices.includes("U")) {uppercaseChoice = true;}

if (typeChoices.includes("N")) {numChoice = true;}

if (typeChoices.includes("S")) {speccharChoice = true;}

lowercaseChoice ? (choiceCharacters += lowercase) : (choiceCharacters);
uppercaseChoice ? (choiceCharacters += uppercase) : (choiceCharacters);
numChoice ? (choiceCharacters += num) : (choiceCharacters);
speccharChoice ? ( choiceCharacters += specchar) : (choiceCharacters);

for (let i = 0; i < passwordLength; i++) {
  password += choiceCharacters.charAt(
    Math.floor(Math.random() * choiceCharacters.length)
  );
}

return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);