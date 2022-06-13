// Assignment code here
var generatePassword = function () {
  //prompt for password length, must be between 8 and 128 characters
  var promptLength = window.prompt('Select a password length at least 8 characters and no longer than 128 characters.');

  //validate input
  if (8 <= promptLength && promptLength <= 128) {
    console.log("acceptable criteria");
  } else {
    window.alert("Select a number that is at least 8 and no greater than 128.");
    return generatePassword();
  }
  //prompt for character types: lowercase, uppercase, numeric, and/or special characters
  //validate input, one character type MUST be selected
  //generate password that matches selected criteria
  //display password in alert or write to page
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
