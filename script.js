// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// myrandomness = myrandomness + collectionValid[Math.floor(Math.random() * collectionValid.length)]

// generatePassword function should be below

// *********************** function logic **********************
    // THEN I am presented with a series of prompts for password criteria
   
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    

    // collected all the data here *************************
    // ************ 1 PROMPT *************
    // ************ need validation ***********
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    // we need a prompt here and ask for the length from the user
 
    var passwordLength = prompt ("How long would you like your password? Pick a number between 8 and 128.");
   
    // check IF the input number is < 8 and > 128 

    if(passwordLength < 8 || passwordLength > 128){
        alert("Incorrect number, please try again!");
    }

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // each prompt needs to be validated...
    // in this case, we should probably use a function to turn the length into a number


    // ************** 4 confirms **************
    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters

    
        var abcCaps = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
        var abcLower = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
        var num = "0 1 2 3 4 5 6 7 8 9";
        var sym = "! # $ % & \ ( ) * + , - . / : ; < = > ? @ ^ [ \ \ ] ^ _ ` { | } ~";
    
        let criteria = [abcCaps, abcLower, num, sym]
        console.log (passwordLength)

    // we need a confirm to ask the user if they want to use lowercase
    var abcLower = confirm("Would you like your password to have lowercase letters?")

    if (abcLower = true){
        array.prototype.push.apply(password, abcLower)
    }
    // we need a confirm to ask the user if they want to use uppercase
    var abcCaps = confirm("Would you like your password to have capital letters?")
    
    if (abcCaps = true){
        array.prototype.push.apply(password, abcCaps)
    }

    // we need a confirm to ask the user if they want to use numeric
    var num = confirm("Would you like your password to have numbers?")

    if (num = true){
        array.prototype.push.apply(password, num)
    }

    // we need a confirm to ask the user if they want to use special characters
    var sym = confirm("Would you like your password to have special characters?")

    if (sym = true){
        array.prototype.push.apply(password, sym)
    }

    // end of "collected all the data here" *************************
    // using the number from above and the 4 booleans




    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // all the information is gathered (all prompts are finished getting input)
    // all the HARD logic goes here ????????
    
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page
    // either do an alert with password... or just check to see if my variable has a password

// *********************** end function logic **********************






// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
