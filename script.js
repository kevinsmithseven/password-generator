// Arrays for lowercase, uppercase, numeric and special character values
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersZer0ToNine = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var selectedSpecialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "<", ">", "?"]


// Function to validate if value entered is a number and alert user if not

function isNumber(passwordLength) {
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number");
    return false;
  }

  return true;
}


// Function to determine if the value entered for the length is within range and alert user if not
function numberIsInRange(passwordLength) {

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    return false;
  }

  return true;
}

// Generate password function
function generatePassword() {
  //Prompt for length of password
  var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.")
  if (!isNumber(passwordLength)) {
    return false;
  }

  // Convert passwordlength to a number
  passwordLength = Number(passwordLength);

  
  if (!numberIsInRange(passwordLength)) {
    return "Please Try Again";
  }

  // Ask users to select which values to use in password
  var useLowerCaseLetters = window.confirm("Click OK to include lowercase letters in your password?")
  var useUpperCaseLetters = window.confirm("Click OK to include uppercase letters in your password?")
  var useNumbers = window.confirm("Click OK to include numbers in your password?")
  var useSpecialCharacters = window.confirm("Click OK to include special characters in your password?")
  
  // Ensure that users selected at least one type from prompts and alert if not
  if (!(useLowerCaseLetters) && !(useUpperCaseLetters) && !(useNumbers) && !(useSpecialCharacters)) {

    window.alert("Please select at least one value")
    return "Please Try Again"
  }

  // create empty array and populate from getRandomChar based on user selection
  var userCharacters = [];
  var password = "";
  if (useLowerCaseLetters) {
    userCharacters.push(...lowerCaseLetters);
    password += getRandomChar(lowerCaseLetters);
  }
  if (useUpperCaseLetters) {
    userCharacters.push(...UpperCaseLetters);
    password += getRandomChar(UpperCaseLetters);
  }
  if (useNumbers) {
    userCharacters.push(...numbersZer0ToNine);
    password += getRandomChar(numbersZer0ToNine);
  }
  if (useSpecialCharacters) {
    userCharacters.push(...selectedSpecialCharacters);
    password += getRandomChar(selectedSpecialCharacters)
  }
  
  // Iterate until selected password length is reached
  while (password.length < passwordLength) {
    password += getRandomChar(userCharacters);
  }

  return password;
}

// Generate a random character and round down
function getRandomChar(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
