// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

function generatePassword() {
 
  //prompt asking for char length
  var charLength = prompt("How many characters do you want your password? Please choose a value between 8-128.");
  //validator for for char length, if failure gives prompt to choose a value between 8-128 and exits the function
  if (charLength < 8 || charLength > 128){
    alert("Please choose a value between 8-128! Please try again!");
    console.error("Please choose a value between 8-128! Please try again!");
    return "Please choose a value between 8-128! Please try again!";
    //end of charlength validator
  } else {
  // prompts asking what type of chracters user wants to include
    var charUpper = confirm("Do you want to have upper case characters in your password?");
    var charLower = confirm("Do you want to have lower case characters in your password?");
    var charNumb = confirm("Do you want to have numeric characters in your password?");
    var charSpecChar = confirm("Do you want to have special characters in your password?");
    //conditional to check if no chracters were chosen
    if (!charUpper && !charLower && !charNumb && !charSpecChar) {
      alert("You must choose at least one character type! Please try again!")
      console.error("You must choose at least one character type! Please try again!")
      return "Error: You must choose at least one character type! Please try again!";
    } else {
      //empty array that will add getRandom fucntions if true
      var randomFunctArrayF = new Array();
      console.log(randomFunctArrayF)
      console.log(charUpper)
      //if fucntion, checks if var value is true, if true then it will push function value onto array
      if(charUpper) {
         randomFunctArrayF.push(getRandomUpper());
      }
      if(charLower) {
        randomFunctArrayF.push(getRandomLower());
      }
      if(charNumb) {
        randomFunctArrayF.push(getRandomNumber());
      }
      if(charSpecChar) {
        randomFunctArrayF.push(getRandomSpecialChar());
      }
      console.log(randomFunctArrayF)
// end of if 

      //function to randomize the array
      function randomizeCharOrder() {
        return randomFunctArrayF[Math.floor(Math.random() * randomFunctArrayF.length)];
      };
      console.log(randomizeCharOrder())
      
//var I is equal to charlength
      var i = charLength;
      //var for empty string
      var passwordText = "";
      //loop based on chralenth value, will looop function randomizecharorder and add to empty string
      for (i = 0; i < charLength; i++) {
        passwordText += randomizeCharOrder()
    };
  };
};
    return passwordText;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//1 listen event for click
//2 prompt
  //2.1 promted asking character length
    //2.1.1 must validate be between 8-128
  //2.2 prompt asking chacters to include
    //2.2.1 prompt asking about lowercase
    //2.2.2 prompt asking about uppercase
    //2.2.3 prompt asking about numbers
    //2.2.4 prompt asking about special characters
//3 must validate if all prompts were answered
  //3.1 validate charlength answered
    //3.1.1 validate charlength is between 8-128
  //3.2 validate atleast one char choice picked
      //3.2.1 check if lc is true
      //3.2.2 check if uc is true
      //3.2.3 check if # is true
      //3.2.4 check if sc is true

//4 generate random char functions
  //4.1 if lowercase is true generate function
    //4.1.1 generates random lower case character

    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };
    console.log(getRandomLower());

  //4.2 if upper case is true generate function
    //4.2.1 generates random upper case character
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };
    console.log(getRandomUpper());

  //4.3 if # is true generate function
    //4.3.1 generates random number character
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    };
    console.log(getRandomNumber());

  //4.4 if sc is true generate function
    //4.4.1 generates random special character
    function getRandomSpecialChar() {
      var specialCharList = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
      return specialCharList[Math.floor(Math.random() * specialCharList.length)]
    };
    console.log(getRandomSpecialChar());
