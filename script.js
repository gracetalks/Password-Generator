// Assignment code here
/** number variable */
var charNumb = "0123456789";
/** uppercase variable */
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
//**lowercase variable */
var charLower = "abcdefghijklmnopqrstuvwxyz";
//**special character variable */
var charSpecial = "!@#$%^&*_~`?><+=-";

/** final password array value set to empty */
var userPass = [];
var userSelection = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  /**final password initial value set to empty */
  userPass = [];
  
  var userChoice = prompt("Choose your password characters between 8 and 128 ");

  /**if user choice is less than 8 or greater than 128 
   * send an alert to please choose according to instructions 
  * and sned the user back to first prompt */

  console.log(userChoice);

  var userChoiceNumb = confirm("Would you like to add numbers in your password?");
  if(userChoiceNumb) {
    userSelection.push(...charNumb);
  }
  console.log(userSelection);

  var userChoiceUpper = confirm("Would like to add uppercase letters in your password?")
  if(userChoiceUpper) {
    userSelection.push(...charUpper);
  }
  console.log(userSelection);

  var userChoiceLower = confirm("Would you like to add lowercase letters in your password?")
  if(userChoiceLower) {
    userSelection.push(...charLower);
  }
  console.log (userSelection);

  var userChoiceSpec = confirm("Would you like to add special characters to your password?")
  if(userChoiceSpec) {
    userSelection.push(...charSpecial);
  }
  else {
    alert("Please choose option");
  }
  console.log (userSelection);
  

  for (var i=0; i < userChoice; i++) {
    userPass.push(userSelection[Math.floor(Math.random() * userSelection.length)]);
    console.log(userPass.join("+"));
  }
  //**Generate password */
  document.getElementById("password").value = userPass.join("");


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

