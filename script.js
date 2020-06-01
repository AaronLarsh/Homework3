// Assignment Code
var generateBtn = document.querySelector("#generate");
//put all functions in an array
var randomFunctArray = [
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomSpecialChar
];

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
    alert("Please choose a value between 8-128! Please try again!")
    console.error("did not choose a vlaue between 8-128")
    return ;
    //end of charlength validator
  } else {
  // prompts asking for chracters user wants to include
    var charUpper = confirm("Do you want to have upper case characters in your password?");
    var charLower = confirm("Do you want to have lower case characters in your password?");
    var charNumb = confirm("Do you want to have numeric characters in your password?");
    var charSpecChar = confirm("Do you want to have special characters in your password?");
    //conditional to check if no chracters were chosen
    if (!charUpper && !charLower && !charNumb && !charSpecChar) {
      alert("You must choose at least one character type!")
      console.error("Did not choose atleast one character type")
      return ;
    } else {
      console.log("one was chosen")
    };
  };
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
//4 generate password
  //4.1 if lc is true generate function
    //4.1.1 generates random lower case character
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };
    console.log(getRandomLower());

  //4.2 if us is true generate function
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

//random the char order of var randomFunctArray 
    function randomizeCharOrder() {
      return randomFunctArray[Math.floor(Math.random() * randomFunctArray.length)];
    };
    console.log(randomizeCharOrder());
    //Math.floor(Math.random() * randomFunctArray.length)