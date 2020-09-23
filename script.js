// randoSelects: ("@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890");
// var randoChar1 = randoSelects[Math.floor(Math.random() * randoSelects.length -1)];
// if(randoSelects.indexOf() !== -1)

// if the confirm is true then set object key to true, and find a way to for loop based on - charLength
// =========================================================
var generatePassword = function () {
  
  var allChar = [
      hasspecialChar = ["@", "#", "$", "%", "^", "&", "*"],
      hasnumChar = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"],
      haslowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
      hasupChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  ];

// STEP 1
var charLength = parseInt(
  prompt(
    "Welcome to Password Generator! How many characters would you like your password to contain?"
  )
);
console.log(charLength);
// validate character length.
if (isNaN(charLength) === true) {
  alert("Please provide a number.");
  return;
} else if (charLength >= 128) {
  alert("Please provide a number less than 128.");
  return;
} else if (charLength < 8) {
  alert("Please provide a number greater than 8.");
  return;
}
// STEP 2

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
var possChar = [];
if (specialChar) possChar.push("specialChar");
if (numChar) possChar.push("numChar");
if (lowChar) possChar.push("lowChar");
if (uppChar) possChar.push("uppChar");

var password = "";

for(let i = 0; i <= charLength.length; i++) {
  var groupIndex = Math.floor(Math.random * possChar.length);
  var group = null
  if(possChar[groupIndex] === "specialChar"){
    group = specialChar;
  }

  for(let i = 0; i <= charLength.length; i++) {
    var groupIndex = Math.floor(Math.random * possChar.length);
    var group = null
    if(possChar[groupIndex] === "numChar"){
      group = numChar;
}

for(let i = 0; i <= charLength.length; i++) {
  var groupIndex = Math.floor(Math.random * possChar.length);
  var group = null
  if(possChar[groupIndex] === "lowChar"){
    group = lowChar;
  }

    for(let i = 0; i <= charLength.length; i++) {
      var groupIndex = Math.floor(Math.random * possChar.length);
      var group = null
      if(possChar[groupIndex] === "uppChar"){
        group = uppChar;
      }
    }



///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
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
