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
//          Psuedo Code

var special1 = ["@" , "#", "$", "%", "^", "&", "*",];
var numChar1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alpha1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"
, "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(alpha1)


// //  1. Welcome to Password Generator! Click "ok" to continue.
      alert("Welcome to Password Generator! Click 'ok' to begin creating your unique password.");
      var charLength = prompt("How many characters would you like your password to contain?");


//   //  2. If you would like to include special characters(#@$%&*^!), click "ok".
      var special2 = confirm("If you would like to include special characters(#@$%&*^!), click 'ok'.")
          if (special2) 
          {
            for( let i = 0; i < special1.length; i++);{
            special3= special1.charAt(Math.floor(Math.random() * Math.floor(special1.length-1)));
          }
        }
          console.log(special3);

//   //  3. If you would like to include numeric characters, click "ok".
      var numChar2 = confirm("If you would like to include numeric characters, click 'ok'.");
        if(numChar2){
          for( let i = 0; i<10; i++);
          var numChar2 = Math.floor(Math.random() * 10);
        }
        console.log(numChar2);

  // //  4. If you would like to include lowercase characters, click "ok".
  //     var lowChar = confirm("If you would like to include lowercase characters, click 'ok'.");
  //     if(lowChar) {
  //       for (let i = 0; i < alpha1.length; i++){
  //       var LowChar1 = alpha1.charAt(Math.floor(Math.random() * alpha1.length));
  //       }

  //       }
  //       // lowChar1 = lowChar1[i].toLowerCase} 
  //       else {
  //         var LowChar1 = alpha1.charAt(Math.floor(Math.random() * Math.floor(alpha1.length - 1)));
  //       }
        
  //       console.log(lowChar1);
        

  //  5. If you would like to include uppercase characters, click "ok".
      var uppChar = confirm("f you would like to include uppercase characters, click 'ok'.")

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
