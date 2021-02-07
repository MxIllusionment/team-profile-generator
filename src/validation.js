const emailValid = require("email-validator");
const githubRegex = require("github-username-regex");

/* Returns true if the string is not empty when trimmed */
function notEmpty(string) {
  return string.trim() !== "";
}

/* Returns true if the string contains only alphabetic characters or spaces*/
function alphabetic(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

  for (let i = 0; i < string.length; i++) {
    if (alphabet.indexOf(string[i]) < 0) {
      return false;
    }
  }

  return true;
}

/* Returns true if the string contains only numerals */
function numeric(string) {
  const numerals = "0123456789".split("");

  for (let i = 0; i < string.length; i++) {
    if (numerals.indexOf(string[i]) < 0) {
      return false;
    }
  }

  return true;
}

/* --- Exported validation function --- */

/* Returns true if string is a valid name, otherwise returns error string */
function name(string) {
  if (!notEmpty(string)) {
    return "Name cannot be empty";
  } else if (!alphabetic(string)) {
    return "Name must consist only of letters and spaces";
  }
  return true;
}

/* Returns true if string is a valid ID, otherwise returns error string */
function id(string) {
  if (!notEmpty(string)) {
    return "ID cannot be empty";
  } else if (!numeric(string)) {
    return "ID must consist only of numbers";
  }
  return true;
}

/* Returns true if the string is a valid email address */
function email(string) {
  if (!emailValid.validate(string)) {
    return "Must be a valid email address";
  }
  return true;
}

/* Returns true if string is a valid office number, otherwise returns error string */
function officeNumber(string) {
  if (!notEmpty(string)) {
    return "Office number cannot be empty";
  } else if (!numeric(string)) {
    return "Office number must consist only of numbers";
  }
  return true;
}

/* Returns true if string is a valid github username, otherwise returns error string */
function github(string) {
  if (!notEmpty(string)) {
    return "GitHub user name cannot be empty";
  } else if (!githubRegex.test(string)) {
    return "GitHub username must be valid";
  }
  return true;
}

/* Returns true if string is a valid school name, otherwise returns error string */
function school(string) {
  if (!notEmpty(string)) {
    return "School cannot be empty";
  } else if (!alphabetic(string)) {
    return "School must consist only of letters and spaces";
  }
  return true;
}

module.exports = {
  name,
  id,
  email,
  officeNumber,
  github,
  school
};