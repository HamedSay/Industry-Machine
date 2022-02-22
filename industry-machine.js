// Gathering my inputs by using "var". // 

var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";
var passString = "";
var passResult = "";


// Calling "textArea" to present the password. //

var textArea = document.getElementById("password");

function characterTypes() {
  var passwordCapital = confirm("Would you like to include uppercase letters?");
  var passwordLowercase = confirm("Would you like to include lowercase letters?");
  var passwordNumeric = confirm("Would you like to include numbers?");
  var passwordSpecial = confirm("Would you like to include special characters?");
  if (passwordCapital === true 
     || passwordLowercase === true
     || passwordNumeric === true 
     || passwordSpecial === true)  {
    // If uppercase letters are chosen, they're added up to the variable "passString". //
    
    if (passwordCapital === true) {
      passString += capital
    }
    
    // If lowercase letters are picked, they're added up to the "passString" variable. //
    
    if (passwordLowercase === true) {
      passString += lower
    }
    
    // If numbers are picked, they're added up to the "passString" variable. //
    
    if (passwordNumeric === true) {
      passString += numeric
    }

    // If special characters are picked, they're added up to the "passString" variable. //
    
    if (passwordSpecial === true) {
      passString += special
    }

  }

  // The presented "else" statement alerts; when none of the variables are picked and loops/cycles back to the start function of "characterTypes". //
  
  else {
    alert("Pick at least one character type.")
    characterTypes()
  };
}

// Gathers data to the element: "#generate" . //

var generateBtn = document.querySelector("#generate");

// Input a password for it to "#generate". //

function writePassword() {
  var text = '';
  
  // "Function" questions; allows the prompt to loop/cycle back. If the certain value: `is less than 8 or greater than 128` when picked. //
  
  function questions() {
    var passwordLength = prompt("Length of Password? Pick a number between 8 characters to 128 characters.");
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      characterTypes()
      for (let i = 0; i < passwordLength; i++) {
        let x = passString[Math.floor(Math.random() * passString.length)]
        passResult += x;
      }
      console.log(passResult);
      console.log(textArea);
      text = document.createTextNode(passResult);
      
      // Discards the old password so that it can "generate password". //
      
      textArea.innerHTML = '';
      textArea.appendChild(text);
      passResult = '';
    };
  }
  questions()
}

// "writePassword" is formed to the "generate password" toggle. //

generateBtn.addEventListener("click", () => {
  writePassword();
});
