// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // To create a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// generatePassword function below
function generatePassword() {

  //prompt for the length and turn string to number
  var passwordLength = prompt(
    "How long would you like your password? Pick a number between 8 and 128."
  );
  var confirmLength = parseInt(passwordLength);
  console.log(confirmLength);
  
  // length validation
  if (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
    alert("Incorrect number, please generate again!");
    return;
  }

  // List of variables and array for the password criteria  
  var collectionValidChars = [];
  var abcCapsArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var abcLowerArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var numArr = "0123456789".split("");
  var specialArr = "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~".split("");

  // confirm to ask the user if they want to use lowercase, for loop and push
  var addAbcLower = confirm(
    "Would you like your password to have lowercase letters?"
  );
  if (addAbcLower === true) {
    for (var i = 0; i < abcLowerArr.length; i++) {
      collectionValidChars.push(abcLowerArr[i]);
    }
  }
  // confirm to ask the user if they want to use uppercase, for loop and push to valid characters array
  var addAbcCaps = confirm(
    "Would you like your password to have uppercase letters?"
  );
  if (addAbcCaps === true) {
    for (var i = 0; i < abcCapsArr.length; i++) {
      collectionValidChars.push(abcCapsArr[i]);
    }
  }
  // confirm to ask the user if they want to use numeric, for loop and push to valid characters array
  var addNum = confirm("Would you like your password to have numeric letters?");
  if (addNum === true) {
    for (var i = 0; i < numArr.length; i++) {
      collectionValidChars.push(numArr[i]);
    }
  }
  // confirm to ask the user if they want to use special characters, for loop and push to valid characters array
  var addSpecial = confirm(
    "Would you like your password to have special characters?"
  );
  if (addSpecial === true) {
    for (var i = 0; i < specialArr.length; i++) {
      collectionValidChars.push(specialArr[i]);
    }
  }
  // alert if the user has an empty collection of valid charecters
  if (collectionValidChars.length === 0) {
    alert("You must choose at least one Character Type! Please generate again");
    return;
  }
  
  // using the specified length and the 4 criteria, create valid password using a for loop and variable for the password 
  var randomPassword = "";
  for (var i = 0; i < confirmLength; i++) {
    collectionValidChars[
      Math.floor(Math.random() * collectionValidChars.length)
    ];
    randomPassword +=
      collectionValidChars[
        Math.floor(Math.random() * collectionValidChars.length)
      ];
  }
  return randomPassword;
}
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
