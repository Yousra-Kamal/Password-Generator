var passwordLength;
//Empty array to store possible charecters.
var finalArr = [];
// Array of special characters
var specialCharArr = [
  "@",
  "#",
  "$",
  "%",
  "&",
  "!",
  "?",
  "/",
  "*",
  "”",
  "+",
  ";",
];
// Array of numbers
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of Lowercase characters
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of Uppercase characters
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptsResult = promptsOutput(); //returns user prompt result (true or false)
  /*   console.log(promptsResult); */
  var passwordText = document.querySelector("#password");

  if (promptsResult) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

//functoin generatePassword
function generatePassword() {
  // Password
  var generatedPwd = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomValue = Math.floor(Math.random() * finalArr.length);
    generatedPwd = generatedPwd + finalArr[randomValue];
  }
  return generatedPwd;
}
function promptsOutput() {
  finalArr = [];

  // Character prompts and conditions
  passwordLength = parseInt(
    prompt(
      "How many characters would you like in your password? (pick between 8 - 128 characters)"
    )
  );

  if (
    Number.isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert(
      "\nError⚠️  \nCharacter length has to be a number, (Pick between 8 - 128). \nPlease try again😊"
    );
    return null;
  }

  var hasLowerCase = confirm(
    "Would you like to include lowercase characters in your password?"
  );
  if (hasLowerCase) {
    finalArr = finalArr.concat(lowerCaseArr);
  }
  var hasUpperCase = confirm(
    "Would you like to include uppercase characters in your password?"
  );
  if (hasUpperCase) {
    finalArr = finalArr.concat(upperCaseArr);
  }
  var hasSpecialCharacters = confirm(
    "Would you like to include special charracters in your password?"
  );
  if (hasSpecialCharacters) {
    finalArr = finalArr.concat(specialCharArr);
  }
  var hasNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  if (hasNumbers) {
    finalArr = finalArr.concat(numberArr);
  }
  if (!hasSpecialCharacters && !hasNumbers && !hasLowerCase && !hasUpperCase) {
    alert(
      "You must select at least one character type. 😥 \n\nPlease try again"
    );
    return null;
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
