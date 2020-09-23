var generatePassword = function () {
  var hsspecialChar = "@ #$%^&*<>?/}]|+-_~";
  var hsnumChar = "1234567890";
  var hslowChar = "abcdefghijklmnopqrstuvwxyz";
  var hsuppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var charLength = prompt(
    "Welcome to Password Generator! How many characters would you like your password to contain? Please proived a number between 8 and 128."
  );

  // validate character length.
  if (isNaN(charLength)) {
    alert("Please restart and provide a number.");
    return;
  } else if (charLength >= 128) {
    alert("Please restart and provide a number less than 128.");
    return;
  } else if (charLength < 8) {
    alert("Please restart and provide a number greater than 8.");
    return;
  }
  var specialChar = confirm(
    "If you would like to include special characters(#@$%&*^!), click 'ok'."
  );

  var numChar = confirm(
    "If you would like to include numeric characters, click 'ok'."
  );

  var lowChar = confirm(
    "If you would like to include lowercase characters, click 'ok'."
  );

  var uppChar = confirm(
    "If you would like to include uppercase characters, click 'ok'."
  );

  var charPool = "";

  if (specialChar) {
    charPool = charPool.concat(hsspecialChar);
  }
  if (numChar) {
    charPool = charPool.concat(hsnumChar);
  }
  if (lowChar) {
    charPool = charPool.concat(hslowChar);
  }

  if (uppChar) {
    charPool = charPool.concat(hsuppChar);
  }

  var charArray = charPool.split("");

  var password = "";

  for (let i = 0; i < charLength; i++) {
    var randomChar = charArray[Math.floor(Math.random() * charArray.length)];

    password = password.concat(randomChar);
  }

  return password;
};

///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment+ you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
