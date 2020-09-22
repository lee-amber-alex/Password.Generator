var generatePassword = function () {
  
    hsspecialChar = ["@", "#", "$", "%", "^", "&", "*","<",">","?","/","{","}","[","]","|","=","+","-","_","`","~"];
    hsnumChar = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
    hslowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    hsuppChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  // var allChar2 ="@#$%^&*1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  

  var charLength = prompt("Welcome to Password Generator! How many characters would you like your password to contain?");

  // validate character length.
  if (isNaN(charLength)) {
    alert("Please restart and provide a number.");
    return

  } else if (charLength >= 128) {
    alert("Please restart and provide a number less than 128.");
    return

  } else if (charLength < 8) {
    alert("Please restart and provide a number greater than 8.");
    return
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

 var charPool = []; 

//  All Characters
 if(specialChar, numChar, lowChar , uppChar){
  charPool.push(toString(hsspecialChar, hsnumChar, hslowChar, hsuppChar));
  console.log(charPool);
} 

// Special, Lowercase, Uppercase
  else if(specialChar, lowChar , uppChar){
   charPool.push(hsspecialChar , hslowChar , hsuppChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Special, Uppercase
  if(specialChar, uppChar){
    charPool.push(hsspecialChar , hsuppChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Special, Lowercase
  if(specialChar, lowChar){
    charPool.push(hsspecialChar , hslowChar );
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Special, Numeric
  if(specialChar, numChar){
    charPool.push(hsspecialChar , hsnumChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Special
  if(specialChar){
    charPool.push(hsspecialChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Numeric, Lowercase, Uppercase
  if(numChar, lowChar , uppChar){
    charPool.push(hsnumChar , hslowChar , hsuppChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Numeric, Uppercase
  if(numChar, uppChar){
    charPool.push(hsnumChar , hsuppChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Numeric, Lowercase
  if(numChar, lowChar){
    charPool.push(hsnumChar , hslowChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Numeric
  if(numChar){
    charPool.push(hsnumChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Lowercase, Uppercase
  if(lowChar , uppChar){
    charPool.push(hslowChar , hsuppChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Lowercase
  if(lowChar){
    charPool.push(hslowChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   // Uppercase
  if(uppChar){
    charPool.push(hsuppChar);
    console.log(charPool);
  } 
  console.log (Math.floor(Math.random() * charLength.length));

//   console.log(charPool);
}




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
