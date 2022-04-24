// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var number = "0123456789"
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()+=~<>?";

var characters = [number, lowerCase, upperCase, specialCharacters];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    console.log("button clicked")

      var passValue = prompt("Choose the length of your password. 8-128");
        
      if (passValue < 8 || passValue > 128) {
        alert("length must be between 8-128");
        return "";
      }

      var numberValue = confirm("Do you want numbers?");
      var upperCaseValue = confirm("Do you want Uppercase letters?");
      var lowerCaseValue = confirm("Do you want Lowercase letters?");
      var specialCharactersValue = confirm("Do you want special characters?");
      var charactersReturn = ""
      var characterPasword = ""
          
      if (numberValue) {
        charactersReturn = charactersReturn.concat(number);
      }

      if (lowerCaseValue) {
        charactersReturn = charactersReturn.concat(lowerCase);
      }

      if (upperCaseValue) {
        charactersReturn = charactersReturn.concat(upperCase);
      }

      if (specialCharactersValue) {
        charactersReturn = charactersReturn.concat(specialCharacters);
      }

      console.log(charactersReturn)

      for(i = 0; i < passValue; i++) {
        var current = Math.floor(Math.random() * (charactersReturn.length));
        characterPasword = characterPasword.concat(charactersReturn[current]);
      }
  
    return characterPasword;
  }
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

