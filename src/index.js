let characters = require("./characters.json");

const createPassword = (len) => {
  let password = "";
  for (let i = 0; i < len; i++) {
    const char = newChar();
    password += char;
  }
  return password;
};

function newChar() {
  let index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

module.exports = { createPassword };
