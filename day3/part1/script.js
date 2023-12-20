// adapted from https://github.com/hiimjustin000/advent-of-code/blob/master/2023/day3/part1.js

function sumPartNumbers(engineSchematic) {
  const rows = engineSchematic.split("\n");
  let result = 0;

  for (let row = 0; row < rows.length; row++) {
    // Replace periods with spaces to handle the numbers
    const numbers = rows[row].replace(/\./g, " ");

    // Find numbers in the row using regular expression, it iterates over each number found in the row.
    for (const match of numbers.matchAll(/\d+/g)) {
      // Iterate over each character in the number
      for (let j = match.index; j < match.index + match[0].length; j++) {
        // Gather surrounding characters including diagonals
        const surrounding = [
          (rows[row - 1] ?? "")[j - 1] ?? ".",
          (rows[row - 1] ?? "")[j] ?? ".",
          (rows[row - 1] ?? "")[j + 1] ?? ".",
          (rows[row] ?? "")[j - 1] ?? ".",
          (rows[row] ?? "")[j] ?? ".",
          (rows[row] ?? "")[j + 1] ?? ".",
          (rows[row + 1] ?? "")[j - 1] ?? ".",
          (rows[row + 1] ?? "")[j] ?? ".",
          (rows[row + 1] ?? "")[j + 1] ?? ".",
        ];

        // Check if any surrounding character is a symbol
        if (surrounding.some((x) => /[^0-9.]/.test(x))) {
          // Add the number to the result if it's adjacent to a symbol
          result += parseInt(match[0]);
          break;
        }
      }
    }
  }

  return result;
}

// Example engine schematic
let engineSchematic = text;

console.log("Sum of Part Numbers:", sumPartNumbers(engineSchematic));
