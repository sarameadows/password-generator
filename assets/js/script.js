// Assignment code here

var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "1234567890";
var specialString = "!#$%&'()*+,-./:;<=>?@^_`{|}~";

var pickLength = function() {
  //prompt for password length, must be between 8 and 128 characters
  var promptLength = window.prompt('Select a password length at least 8 characters and no longer than 128 characters.');

  //validate input
  if (8 <= promptLength && promptLength <= 128) {
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

  //variables for password criteria
  var passwordLength = pickLength();
  var passwordCharacters = pickCharacters();

  //generate password that matches selected criteria
  switch(passwordCharacters) {
    //lowercase string password
    case 1:
      while(randomPassword.length < passwordLength) {
        randomPassword += alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
      }
      break;
    
    //lowercase and uppercase string password
    case 2:
      while(randomPassword.length < passwordLength){
        randomPassword += alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
        randomPassword += alphabetString.charAt(Math.floor(Math.random() * alphabetString.length)).toUpperCase();
        //if randomPassword becomes too long, cut it to desired length
        if (randomPassword.length > passwordLength) {
          randomPassword = randomPassword.substring(0, passwordLength);
        }
      }
      break;
    
    //lowercase, uppercase, and numerical string password
    case 3:
      while(randomPassword.length < passwordLength){
        randomPassword += alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
        randomPassword += alphabetString.charAt(Math.floor(Math.random() * alphabetString.length)).toUpperCase();
        randomPassword += numberString.charAt(Math.floor(Math.random() * numberString.length));
        //if randomPassword becomes too long, cut it to desired length
        if (randomPassword.length > passwordLength) {
          randomPassword = randomPassword.substring(0, passwordLength);
        }
      }
      break;

    //lowercase, uppercase, numerical, and special string password
    case 4:
      while(randomPassword.length < passwordLength){
        randomPassword += alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
        randomPassword += alphabetString.charAt(Math.floor(Math.random() * alphabetString.length)).toUpperCase();
        randomPassword += numberString.charAt(Math.floor(Math.random() * numberString.length));
        randomPassword += specialString.charAt(Math.floor(Math.random() * specialString.length));
        //if randomPassword becomes too long, cut it to desired length
        if (randomPassword.length > passwordLength) {
          randomPassword = randomPassword.substring(0, passwordLength);
        }
      }
      break;
  }
   return randomPassword;
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
