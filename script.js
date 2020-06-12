// Assignment Code
var generateBtn = document.querySelector("#generate");

// TODO: Create generatePassword
  // prompt - how many characters (length)
    // store (password length) in variable
  // confirm other user wants (special characters, numeric characters, lowercase characters, uppercase characters)
    // store (booleanConfirms) in variable
  // (5 variables in total storage)
// if character boolean is true, add that array to a compiling array like "possibleCharacters" array

// then we build the new password out of the "possibleCharacters" array into a passwordString var

// return passwordString 


// WORKSPACE //




// The final function goal //
function generatePassword() {

  // defining character set arrays//
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var symbols = ["!","@","#","$","%","^","&","*","(",")","-","+","=","_","`","~"];
  var numbers = "0123456789";

  // defining final array where character sets will be added to //
  var useTheseCharacters = []

  // defining a function that enters chosen character set arrays into final array //
  function enterCharacterSets(){
    if (yesLowercase) {
      for( var i=0; i < lowerCase.length; i++ ) {
        useTheseCharacters.push(lowerCase[i]);
      }
    } 
    if (yesUppercase) {
      for( var i=0; i < upperCase.length; i++ ) {
        useTheseCharacters.push(upperCase[i]);
      }
    } 
    if (yesSymbols) {
      for( var i=0; i < symbols.length; i++ ) {
        useTheseCharacters.push(symbols[i]);
      }
    } 
    if (yesNumbers) {
      for( var i=0; i < numbers.length; i++ ) {
        useTheseCharacters.push(numbers[i]);
      }
    } 
  }

  // first prompt for length of password //
  var howLong = prompt("How many characters long would you like your password? Enter a number between 8 - 128.")
  
  // validator to ensure input is useable //
  while (howLong < 8 || howLong > 128 || isNaN(howLong)) {
    var howLong = prompt("Please only choose a number within 8 - 128.")
  }

  // 4 confirms to choose character set and running the function to add them in final array //  
  var yesLowercase = confirm("Would you like lowercase characters in your password?");
  var yesUppercase = confirm("Would you like uppercase characters in your password?");
  var yesSymbols = confirm("Would you like symbols in your password?");
  var yesNumbers = confirm("Would you like numbers in your password?");
  enterCharacterSets();

  // validator to ensure at least one character set is chosen //
  while (useTheseCharacters.length === 0) {
    alert("Please choose AT LEAST one of the character sets.");
    var yesLowercase = confirm("Would you like lowercase characters in your password?");
    var yesUppercase = confirm("Would you like uppercase characters in your password?");
    var yesSymbols = confirm("Would you like symbols in your password?");
    var yesNumbers = confirm("Would you like numbers in your password?");
    enterCharacterSets();
  }

    console.log(useTheseCharacters);
    

  }


  
  







function newFunction() {
  var mustChoose;
  return mustChoose;
}

// WORKSPACE END //

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
