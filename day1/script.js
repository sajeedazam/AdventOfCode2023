function processMultilineStrings(inputString) {
  // Split the string into an array of lines
  let linesArray = inputString.split("\n");

  // Array to store the results for each multiline string
  let resultsArray = [];

  // Loop through each line to find the numbers
  linesArray.forEach((line) => {
    let firstDigit = null;
    let lastDigit = null;

    // Find the first numeric character from left to right
    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i])) {
        firstDigit = parseInt(line[i]);
        break;
      }
    }

    // Find the first numeric character from right to left
    for (let i = line.length - 1; i >= 0; i--) {
      if (!isNaN(line[i])) {
        lastDigit = parseInt(line[i]);
        break;
      }
    }

    // Create a two-digit number and store it in the results array
    if (firstDigit !== null && lastDigit !== null) {
      let twoDigitNumber = parseInt(`${firstDigit}${lastDigit}`);
      resultsArray.push(twoDigitNumber);
    }
  });

  let sum = resultsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sum;
}

// Example usage:
let numbersArray = processMultilineStrings(text);
console.log("Puzzle output:", numbersArray);
