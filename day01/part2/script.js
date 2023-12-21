function processMultilineStrings(inputString) {
  // Split the string into an array of lines
  let linesArray = inputString.split("\n");

  // Array to store the results for each multiline string
  let resultsArray = [];

  // Function to convert word digits to numeric digits
  function convertToNumber(word) {
    // Object mapping spelled-out numbers to their corresponding numeric values
    const wordDigits = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    // Returns the numeric value of the spelled-out number or NaN if not found
    return wordDigits[word] || NaN;
  }

  // Loop through each line to find the numbers
  linesArray.forEach((line) => {
    let firstDigit = null;
    let lastDigit = null;

    // Loop to find the first digit/spelled-out number from left to right
    for (let i = 0; i < line.length; i++) {
      let potentialNumber = "";
      for (let j = i; j < i + 5 && j < line.length; j++) {
        potentialNumber += line[j];
        if (
          !isNaN(potentialNumber) ||
          !isNaN(convertToNumber(potentialNumber))
        ) {
          firstDigit = !isNaN(potentialNumber)
            ? parseInt(potentialNumber)
            : convertToNumber(potentialNumber);
          break;
        }
      }
      // If number has been found then break
      if (firstDigit !== null) {
        break;
      }
    }

    // Loop to find the last digit/spelled-out number from right to left
    for (let i = line.length - 1; i >= 0; i--) {
      let potentialNumber = "";
      for (let j = i; j > i - 5 && j >= 0; j--) {
        potentialNumber = line[j] + potentialNumber;
        if (
          !isNaN(potentialNumber) ||
          !isNaN(convertToNumber(potentialNumber))
        ) {
          lastDigit = !isNaN(potentialNumber)
            ? parseInt(potentialNumber)
            : convertToNumber(potentialNumber);
          break;
        }
      }
      // If number has been found then break
      if (lastDigit !== null) {
        break;
      }
    }

    // Create a two-digit number and store it in the results array
    if (firstDigit !== null && lastDigit !== null) {
      let twoDigitNumber = parseInt(`${firstDigit}${lastDigit}`);
      resultsArray.push(twoDigitNumber);
    }
  });

  // Sum up all the numbers in the results array
  let sum = resultsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sum;
}

let answer = processMultilineStrings(text);
console.log("Puzzle output:", answer);
