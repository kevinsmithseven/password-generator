// Arrays for lowercase, uppercase, numeric and special character values
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersZer0ToNine = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var selectedSpecialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "<", ">", "?"]

//Prompt for length of password
var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.")

//Need to validate: length is in between 8 and 128 and whether the value type is a number

isNumber() {
  if (passwordLength = (!typeof(Number))) {
    window.prompt("Please enter a number");
  }
}

numberIsInRange() {
  if (passwordLength >= "8" && passwordLength <= "128" && isNumber === true) {
    typeSelection();
  }
}

//Prompts asking the user to select which criteria to use in the password
typeSelection() {
  var useLowerCaseLetters = window.confirm("Would you like to include lowercase letters in your password?")
  var useUpperCaseLetters = window.confirm("Would you like to include uppercase letters in your password?")
  var useNumbers = window.confirm("Would you like to include numbers in your password?")
  var useSpecialCharacters = window.confirm("Would you like to include special characters in your password?")
}

//Need to validate that at least one type is selected - if not, then prompt user to select at least one type

if ((useLowerCaseLetters) || (useUpperCaseLetters) || (useNumbers) || (useSpecialCharacters) === true) {
  //Call function that generates password?
} else {
  window.prompt("Please select at least one value")
  typeSelection()
}



//Need to iterate across arrays for random selections based on user selections













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
