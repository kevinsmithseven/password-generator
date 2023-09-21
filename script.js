// Arrays for lowercase, uppercase, numeric and special character values
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersZer0ToNine = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var selectedSpecialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "<", ">", "?"]


//Need to validate: length is in between 8 and 128 and whether the value type is a number

function isNumber(passwordLength) {
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number");
    return false;
  }

  return true;
}

//Determine if password length and type is correct, if not ask them to enter a valid number
function numberIsInRange(passwordLength) {

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    return false;
  }

  return true;
}

//Prompts asking the user to select which criteria to use in the password
function generatePassword() {
  //Prompt for length of password
  var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.")
  if (!isNumber(passwordLength)) {
    return false;
  }

  passwordLength = Number(passwordLength);

  if (!numberIsInRange(passwordLength)) {
    return "Please Try Again";
  }

  var useLowerCaseLetters = window.confirm("Click OK to include lowercase letters in your password?")
  var useUpperCaseLetters = window.confirm("Click OK to include uppercase letters in your password?")
  var useNumbers = window.confirm("Click OK to include numbers in your password?")
  var useSpecialCharacters = window.confirm("Click OK to include special characters in your password?")
  //Need to validate that at least one type is selected - if not, then prompt user to select at least one type

  if (!(useLowerCaseLetters) && !(useUpperCaseLetters) && !(useNumbers) && !(useSpecialCharacters)) {

    window.alert("Please select at least one value")
    return "Please Try Again"
  }

  
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
  
  // duplicate for each of the types


  while (password.length < passwordLength) {
    password += getRandomChar(userCharacters);
  }

  return password;
}


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
