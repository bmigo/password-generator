// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  var charLength = prompt("How many characters would you like in your new password? (8-128)");
  if ((charLength >= 8) && (charLength <= 128)) {
    var numbers = "1234567890";
    var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
    var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var symbols = "!'#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    var allChar = numbers + lowerCase + upperCase + symbols;
    var setOne = numbers + lowerCase + upperCase;
    var setTwo = lowerCase + upperCase + symbols;
    var setThree = numbers + lowerCase + symbols;
    var setFour = numbers + upperCase + symbols;
    var setFive = numbers + lowerCase;
    var setSix = numbers + upperCase;
    var setSeven = numbers + symbols;
    var setEight = lowerCase + upperCase;
    var setNine = lowerCase + symbols;
    var setTen = upperCase + symbols;

    var newPass = "";

    var genNum = confirm("Would you like numbers in your new password?");
    var genLow = confirm("Would you like lower case letters in your new password?");
    var genUp = confirm("Would you like upper case letters in your new password?");
    var genSym = confirm("Would you like special characters in your new password?");

    if ((genNum === true) && (genLow === true) && (genUp === true) && (genSym === true)){
      for (i = 0; i < charLength; i++) {
        var choice = Math.floor(Math.random() * allChar.length);
        newPass += allChar.charAt(choice);
      }
    }

    if ((genNum === true) && (genLow === true) && (genUp === true) && (genSym === false)){
      for (i = 0; i < charLength; i++) {
        var choice = Math.floor(Math.random() * allChar.length);
        newPass += setOne.charAt(choice);
      }
    }


    return newPass;

  }
  else {
    alert("Please choose a number between 8-128.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
