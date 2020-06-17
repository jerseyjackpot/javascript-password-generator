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
    var passwordLength = prompt ("How long would you like your password? Pick a number between 8 and 128.");
    var confirmlength = parseInt(passwordLength);
// check IF the number is < 8 || > 128
    if(passwordLength < 8 || passwordLength > 128){
        alert("Incorrect number, please try again!");
    }
               
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// each prompt needs to be validated...
// in this case, we should probably use a function to turn the length into a number
    var allChars = true;
    var abcCaps = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"];
    var abcLower = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"];
    var num = ["0 1 2 3 4 5 6 7 8 9"];
    var special = ["! # $ % & \ ( ) * + , - . / : ; < = > ? @ ^ [ \ \ ] ^ _ ` { | } ~"];
// ************* 4 confirms **************
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// we need a confirm to ask the user if they want to use lowercase (push) 
var abcLower = confirm("Would you like your password to have lowercase letters?");
    if(abcLower=== true){
        Array.prototype.push.apply(allChars, password);
    }
// we need a confirm to ask the user if they want to use uppercase (push)
var abcCaps = confirm("Would you like your password to have uppercase letters?");
    if(abcCaps === true){
        Array.prototype.push.apply(allChars, password);
    }
// we need a confirm to ask the user if they want to use numeric (push)
var num = confirm("Would you like your password to have numeric letters?");
    if(num === true){
        Array.prototype.push.apply(allChars, password);
    }
// we need a confirm to ask the user if they want to use special characters (push)
var special = confirm("Would you like your password to have special characters?");
    if(special === true){
        Array.prototype.push.apply(allChars, password);
        
    }
    // this still does not work right
    else{
    alert("You must choose at least one Character Type!");
    }
     
// end of collected all the data here************************
// using the number from above and the 4 booleans

// *********** need a function *****************
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// all the information is gathered (all prompts are finished getting input)
// all the HARD logic goes here ???????

// collectionValid [Math.floor(math.random()*passwordLength.length)]


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// either do an alert with the password or just check to see if my variable has a password




// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);