// Assignment code here

var pickLength = function() {
  //prompt for password length, must be between 8 and 128 characters
  var promptLength = window.prompt('Select a password length at least 8 characters and no longer than 128 characters.');

  //validate input
  if (8 <= promptLength && promptLength <= 128) {
    console.log("acceptable criteria");
    return promptLength;
  } else {
    //if they didn't pick a valid length, alert them and try again
    window.alert("Select a number that is at least 8 and no greater than 128.");
    return pickLength();
  }
}

var pickCharacters = function() {
  //prompt for character types: lowercase, uppercase, numeric, and/or special characters
  var promptCharacters = window.prompt("Select character styles: enter '1' for lowercase only, '2' for lowercase and uppercase, '3' for lowercase, uppercase, and numeric, or '4' for lowercase, uppercase, numeric, and special characters.");

  promptCharacters = parseInt(promptCharacters);

  //validate input
  if(promptCharacters === 1 || promptCharacters === 2 || promptCharacters === 3 || promptCharacters === 4) {
    console.log("acceptable criteria");
    return promptCharacters;
  } else {
    //if they didn't pick a valid option, alert them and try again
    window.alert("Select a valid option: 1, 2, 3, or 4.");
    return pickCharacters();
  }
}

var generatePassword = function () {
  //variable for the generated password
  var randomPassword = "";
  var passwordLength = pickLength();
  console.log(passwordLength);
  var passwordCharacters = pickCharacters();
  console.log(passwordCharacters);
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
