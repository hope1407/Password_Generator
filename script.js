let upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lwr = "abcdefghijklmnopqrstuvwxyz";
let spc = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let num = "1234567890";
let types = [{upr}, {lwr}, {spc}, {num}]
let generateBtn = document.querySelector("#generate");
let randomUpr = upr[Math.floor(Math.random() * upr.length)];
let randomLwr = lwr[Math.floor(Math.random() * lwr.length)];
let randomSpc= spc[Math.floor(Math.random() * spc.length)];
let randomNum = num[Math.floor(Math.random() * num.length)];

console.log(randomUpr);
console.log(randomLwr);
console.log(randomNum);
console.log(randomSpc);

// Write password to the #password input
function writePassword() {
  function generatePassword(){  
  let allowedCharacters = ""
  let password = ""
  // Variable for nubmer entered in prompt
  let pwLen = parseInt(prompt("How many characters do you want in your password?", "Number"));
  while (isNaN(pwLen) || pwLen < 8 || pwLen > 128){
    alert("Password must be between 8 and 128 characters.");
    pwLen = prompt("How many characters do you want in your password?", "Number");
  };
  let includeUpr = confirm("Do you want to include uppercase letters?");
  if (includeUpr){
    allowedCharacters += upr;
  };
  let includeLwr = confirm("Do you want to include lowercase letters?");
  if (includeLwr){
    allowedCharacters += lwr;
  };
  let includeChr =confirm("Do you want to include special characters?");
  if (includeChr){
    allowedCharacters += spc;
  };
  let includeNum =confirm("Do you want to include numbers?");
  if (includeNum){
    allowedCharacters += num;
  };
  console.log(allowedCharacters);

    for (let i = 0 ; i < pwLen ; i++){
      password = password + allowedCharacters.charAt(Math.floor(Math.random() * Math.floor(pwLen)));
    }
  }
  let password = generatePassword();
  console.log(password);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
// Add event listener to generate button.  When the button is clicked, it calls the writePassword function
generateBtn.addEventListener("click", writePassword);