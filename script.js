// Assignment code here
/** number variable */
var charNumb = "0123456789";
/** uppercase variable */
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
//** lowercase variable */
var charLower = "abcdefghijklmnopqrstuvwxyz";
//** special character variable */
var charSpecial = "!@#$%^&*_~`?><+=-";

// Final password array value set to empty
var userPass = [];
var userSelection = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // Final password initial value set to empty 
  userPass = [];
  
  // Prompt for amount of characters needed for password
  var userChoice = prompt("Choose your password characters between 8 and 128 ");

  console.log(userChoice);

  // Validate amount of numbers in password
  var userChoiceNumb = confirm("Would you like to add numbers in your password?");
  if(userChoiceNumb) {
    userSelection.push(...charNumb);
  }
  console.log(userSelection);

  // Validate amount of uppercase letters in password
  var userChoiceUpper = confirm("Would like to add uppercase letters in your password?")
  if(userChoiceUpper) {
    userSelection.push(...charUpper);
  }
  console.log(userSelection);

  // Validate amount of lowercawse letters in password
  var userChoiceLower = confirm("Would you like to add lowercase letters in your password?")
  if(userChoiceLower) {
    userSelection.push(...charLower);
  }
  console.log (userSelection);

  // Validate amount of special characters in password
  var userChoiceSpec = confirm("Would you like to add special characters to your password?")
  if(userChoiceSpec) {
    userSelection.push(...charSpecial);
  }
  else {
    alert("Please choose option");
  }
  console.log (userSelection);
  
  // All prompts are now answered--generating password
  for (var i=0; i < userChoice; i++) {
    userPass.push(userSelection[Math.floor(Math.random() * userSelection.length)]);
    console.log(userPass.join("+"));
  }
  // Generate password in document 
  document.getElementById("password").value = userPass.join("");


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

