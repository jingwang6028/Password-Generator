// Assignment Code
var generateBtn = document.querySelector("#generate");

var specChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  console.log('hello world');

  // 1 prompt the user for the password criteria
  //   password length 8 ~ 128
  //   lowercase, uppercase, number, special Character
  // 2 Validate the Input
  // 3 generate password based on criteria
  // 4 display the password
  // (how many characters would you like your password to contain?
  //   Click OK to confirm including special characters. 
  //   Click OK to confirm including numbers characters. Click OK to confirm including lowercase characters. Click OK to confirm including uppercase characters. )

  //prompt window user input number
  var inputNum = window.prompt('How many characters would you like your password to contain? Choose between 8 and 128.');
  console.log(inputNum);

  // convert inputNum to a number datatype, and make it as integer
  inputNum = Math.floor(Number(inputNum));
  console.log(inputNum);

  // check if inputNum is between 8 and 128
  if (inputNum < 8 || inputNum > 128) {
    window.alert('Please input a valid number and try again.');
    return;
  }

  // confirm character type and make the user choose what he/she wants
  var speCharNeed = window.confirm('Click OK to confirm including special characters.');
  var numNeed = window.confirm('Click OK to confirm including numbers characters.');
  var lowerCaseNeed = window.confirm('Click OK to confirm including lowercase characters.');
  var upperCaseNeed = window.confirm('Click OK to confirm including uppercase characters.');

  // check at least one type of character be chosen
  if (!speCharNeed && !numNeed && !lowerCaseNeed && !upperCaseNeed) {
    window.alert('Please choose at least one type of character.');
    return;
  }

  // how many types the user choose
  typesCount = speCharNeed + numNeed + lowerCaseNeed + upperCaseNeed;
  console.log(typesCount);


  // set up an array which contains different types of characters the user confirm (each type as a nested array) 
  // set up an array which contains random one character to confirm that at least one character will be shown in the final password for the type the user choose
  var randomSelector = [];
  var oneChar = [];

  if (speCharNeed) {
    var indexSpec = Math.floor(Math.random()*specChar.length);
    var spec1 = specChar[indexSpec];
    randomSelector.push(specChar);
    oneChar.push(spec1);
    console.log(spec1);
  }

  if (numNeed) {
    var indexNum = Math.floor(Math.random()*number.length);
    var num1 = number[indexNum];
    randomSelector.push(number);
    oneChar.push(num1);
    console.log(num1);
  }

  if (lowerCaseNeed) {
    var indexLower = Math.floor(Math.random()*lowerCase.length);
    var lower1 = lowerCase[indexLower];
    randomSelector.push(lowerCase);
    oneChar.push(lower1);
    console.log(lower1);
  }

  if (upperCaseNeed) {
    var indexUppre = Math.floor(Math.random()*upperCase.length);
    var upper1 = upperCase[indexUppre];
    console.log(upper1);
    randomSelector.push(upperCase)
    oneChar.push(upper1);
  }

  // make nested randomselector array be flat
  console.log(randomSelector);
  console.log(randomSelector.length);
  var flatRandom = randomSelector.flat();
  console.log(oneChar);
  console.log(flatRandom);

  // random select the rest of the characters needed based on the user input number 
  var extraCharNum = inputNum - oneChar.length
  var extraValue = [];
  for (var i=0; i<extraCharNum; i++) {
    
    var randomValue = flatRandom[Math.floor(Math.random()*flatRandom.length)];
    console.log(randomValue);
    extraValue.push(randomValue);

  }

  console.log(extraValue);

  // combine one character value array and the rest characters array
  var finalValueArray = oneChar.concat(extraValue);
  console.log(finalValueArray);

  // convert array to a string
  var finalPassword = finalValueArray.join('');
  console.log(finalPassword);


  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);