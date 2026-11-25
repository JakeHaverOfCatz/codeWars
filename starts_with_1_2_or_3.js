function validateCode(numbertown) {
  let digits = numbertown.toString().split("");
  if (digits[0] == 1) {
    return true;
  } else if (digits[0] == 2) {
    return true;
  } else if (digits[0] == 3) {
    return true;
  } else {
    return false;
  }
}

// Basic regex tasks. Write a function that takes in a numeric code of any length (passed as an integer). The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.
