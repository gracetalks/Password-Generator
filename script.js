// Assignment code here
/** number variable */
let charNumb = "0123456789";
/** uppercase variable */
let charUpper = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
//**lowercase variable */
let charLower = "abcdefghijklmnopqrstuvwxyz";
//**special character variable */
let charSpecial = "!@#$%^&*_~`?><+=-";

/** final password array value set to empty */
let userPass = [];
let userSelection = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  /**final password initial value set to empty */
  userPass = [];
  
  let userChoice = prompt("Choose your password charahcters between 8 and 128 ");

  /**if user choice is less than 8 or greater than 128 
   * send an alert to please choose according to instructions 
  * and sned the user back to first prompt */

  console.log(userChoice);

  let userChoiceNumb = confirm("would you like to add numbers in your password?");
  if(userChoiceNumb) {
    userSelection.push(...charNumb);
  }
  console.log(userSelection);

  let userChoiceUpper = confirm("Would like to add uppercase letters in your password?")
  if(userChoiceUpper) {
    userSelection.push(...charUpper);
  }
  console.log(userSelection);

  let userChoiceLower = confirm("Would you like to add lowercase letters in your password?")
  if(userChoiceLower) {
    userSelection.push(...charLower);
  }
  console.log (userSelection);

  let userChoiceSpec = confirm("Would you like to add special characters to your password?")
  if(userChoiceSpec) {
    userSelection.push(...charSpecial);
  }
  else {
    alert("Please choose option");
  }
  console.log (userSelection);
  

  for (let i=0; i < userChoice; i++) {
    userPass.push(userSelection[Math.floor(Math.random() * userSelection.length)]);
    console.log(userPass.join("+"));
  }

  document.getElementById("password").value = userPass.join("");


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

