// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "~", "<", ">", "?"];

var characters = [number, lowerCase, upperCase, specialCharacters];

// console.log(passSplit)
// String.fromCharCode(Math.floor(Math.random()* 10)+ 48))

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    console.log("button clicked")

      var passValue = prompt("Choose the length of your password. 8-128");

      var numberValue = confirm("Do you want numbers?");

      var upperCaseValue = confirm("Do you want Uppercase letters?");

      var specialCharactersValue = confirm("Do you want special characters?");

      var charactersReturn = [lowerCase]

      if (numberValue) {
        charactersReturn.push(number)
      }else {

      }


      if (upperCaseValue) {
        charactersReturn.push(upperCase)
      }else {

      }


      if (specialCharactersValue) {
        charactersReturn.push(specialCharacters)
      }else {

      }



  // console.log((Math.floor(Math.random()* 10)+ 48))
   
   


    
    
    
    return charactersReturn;


  }




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

