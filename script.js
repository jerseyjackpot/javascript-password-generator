// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// GIVEN I need a new, secure password
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
// generatePassword function should be below
// function needs to go here
function generatePassword() {
  // THEN I am presented with a series of prompts for password criteria
  // ?????? what series
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // ???? I thought that was a given

  // collected all the data here
  // ********* 1 prompt *************
  // ********* need validation **************
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // we need a prompt here and ask for the length
  var passwordLength = prompt(
    "How long would you like your password? Pick a number between 8 and 128."
  );
  var confirmLength = parseInt(passwordLength);
  console.log(confirmLength);
  // check IF the number is < 8 || > 128
  if (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
    alert("Incorrect number, please generate again!");
    return;
  }

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // each prompt needs to be validated...
  // in this case, we should probably use a function to turn the length into a number
  var collectionValidChars = [];
  var abcCapsArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var abcLowerArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var numArr = "0123456789".split("");
  var specialArr = "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~".split("");
  // ************* 4 confirms **************
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // we need a confirm to ask the user if they want to use lowercase (push)
  var addAbcLower = confirm(
    "Would you like your password to have lowercase letters?"
  );
  if (addAbcLower === true) {
    for (var i = 0; i < abcLowerArr.length; i++) {
      collectionValidChars.push(abcLowerArr[i]);
    }
  }
  console.log(collectionValidChars);
  // we need a confirm to ask the user if they want to use uppercase (push)
  var addAbcCaps = confirm(
    "Would you like your password to have uppercase letters?"
  );
  if (addAbcCaps === true) {
    for (var i = 0; i < abcCapsArr.length; i++) {
      collectionValidChars.push(abcCapsArr[i]);
    }
  }
  console.log(collectionValidChars);
  // we need a confirm to ask the user if they want to use numeric (push)
  var addNum = confirm("Would you like your password to have numeric letters?");
  if (addNum === true) {
    for (var i = 0; i < numArr.length; i++) {
      collectionValidChars.push(numArr[i]);
    }
  }
  console.log(collectionValidChars);
  // we need a confirm to ask the user if they want to use special characters (push)
  var addSpecial = confirm(
    "Would you like your password to have special characters?"
  );
  if (addSpecial === true) {
    for (var i = 0; i < specialArr.length; i++) {
      collectionValidChars.push(specialArr[i]);
    }
  }
  console.log(collectionValidChars);

  // if the user has an empty collection of valid charecters alert
  if(collectionValidChars.length === 0){
    alert("You must choose at least one Character Type! Please generate again");
    return;
  }

  // end of collected all the data here************************
  // using the number from above and the 4 booleans

  // *********** need a function *****************
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // all the information is gathered (all prompts are finished getting input)
  // all the HARD logic goes here ???????

  // collectionValid [Math.floor(math.random()*passwordLength.length)]
}
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// either do an alert with the password or just check to see if my variable has a password

// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
// }
