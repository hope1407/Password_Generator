const upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lwr = "abcdefghijklmnopqrstuvwxyz";
const spc = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const num = "1234567890";
let generateBtn = document.querySelector("#generate");

function writePassword() {
  let allowedCharacters = ""

  let password = ""

  let pwLen = parseInt(prompt("How many characters do you want in your password?", "Number"));

  while (isNaN(pwLen) || pwLen < 8 || pwLen > 128) {
    alert("Password must be between 8 and 128 characters.");
    pwLen = prompt("How many characters do you want in your password?", "Number");
  };

  let includeUpr = confirm("Do you want to include uppercase letters?");

  if (includeUpr) {
    allowedCharacters += upr;
  };

  let includeLwr = confirm("Do you want to include lowercase letters?");

  if (includeLwr) {
    allowedCharacters += lwr;
  };

  let includeChr = confirm("Do you want to include special characters?");

  if (includeChr) {
    allowedCharacters += spc;
  };

  let includeNum = confirm("Do you want to include numbers?");

  if (includeNum) {
    allowedCharacters += num;
  };


  for (let i = 0; i < pwLen; i++) {
    const randomindex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[randomindex];
  }

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);