// Assignment Code
var generateBtn = document.querySelector("#generate");


var passLength = prompt ("How long do you want your password to be? 8-128 characters");

if (Totlength < 8 || Totlength > 128){
    alert("Password must be between 8 and 128 characters long. Try again.");
}
var abcUpper = prompt ("does your password include uppercase letters?")
// var lower = prompt ("does your password include lowercase letters?")
// var special = prompt ("does your password include special characters?")

//variables for password
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");


// 2 series of prompts for password criteria
// 3 select which criteria to include in password
// 4 prompts for the length of the password
// 5 choose a length 8-128 chars
// 6 prompt for character types
// 7 choose lower, upper, numbers and or special chars
// 8 Answer prompts
// 9 input is validated and character type is selected
// 10 when all prompts are answered 
// 11 password is generated
// 12 Displayed either in alert or written to the page






// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
