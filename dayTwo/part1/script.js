function processMultilineStrings(inputString) {
  // Split the string into an array of lines
  let linesArray = inputString.split("\n");

  let possibleGames = [];
  let totalSum = 0;

  // Define the limits for red, green, and blue cubes
  const limits = {
    red: 12,
    green: 13,
    blue: 14,
  };

  // Iterate through each line
  for (let line of linesArray) {
    // Extract game ID and sets of cubes
    // Splits each line at ':' to extract the game ID (gameID) and the sets of cubes (sets)
    let [gameID, sets] = line.split(":");
    // Splits the sets of cubes at ';' to create an array (setArray) containing each set
    let setArray = sets.trim().split(";");

    let isPossible = true;

    // Check each set of cubes within the game
    for (let set of setArray) {
      let cubeCount = {
        red: 0,
        green: 0,
        blue: 0,
      };

      // Extract cube counts from each set
      // Splits each set at ',', trims spaces, and then splits by space to extract cube count and color, creating an array of cube information
      let cubes = set.split(",").map((cube) => cube.trim().split(" "));

      // Count red, green, and blue cubes in the set
      for (let cube of cubes) {
        let [count, color] = cube;
        cubeCount[color] += parseInt(count);
      }

      // Check if any color count exceeds the limits
      if (
        cubeCount.red > limits.red ||
        cubeCount.green > limits.green ||
        cubeCount.blue > limits.blue
      ) {
        isPossible = false;
        // No need to check further sets if any set exceeds the limits
        break;
      }
    }

    // If all sets are within limits, mark the game as possible
    if (isPossible) {
      possibleGames.push(parseInt(gameID.trim().split(" ")[1]));
    }
  }

  // Sum up the IDs of the possible games
  totalSum = possibleGames.reduce((acc, cur) => acc + cur, 0);
  return totalSum;
}

let answer = processMultilineStrings(text);
console.log("Puzzle output:", answer);
