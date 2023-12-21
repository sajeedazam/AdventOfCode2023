function processMultilineStrings(inputString) {
  // Split the string into an array of lines
  let linesArray = inputString.split("\n");

  let powerSet = [];
  let totalSum = 0;

  // Iterate through each line
  for (let line of linesArray) {
    // Extract game ID and sets of cubes
    // Splits each line at ':' to extract the game ID (gameID) and the sets of cubes (sets)
    let [gameID, sets] = line.split(":");
    // Splits the sets of cubes at ';' to create an array (setArray) containing each set
    let setArray = sets.trim().split(";");
    let cubeCount = {
      red: 0,
      green: 0,
      blue: 0,
    };
    // Check each set of cubes within the game
    for (let set of setArray) {
      // Extract cube counts from each set
      // Splits each set at ',', trims spaces, and then splits by space to extract cube count and color, creating an array of cube information
      // example: a cube in cubes would have value ["1","blue"]
      let cubes = set.split(",").map((cube) => cube.trim().split(" "));

      // Count red, green, and blue cubes in the set
      for (let cube of cubes) {
        // count and color extracted from one array of cube
        let tempCount = {
          red: 0,
          green: 0,
          blue: 0,
        };

        let [count, color] = cube;
        tempCount[color] += parseInt(count);

        if (tempCount[color] >= cubeCount[color]) {
          cubeCount[color] = tempCount[color];
        }
      }
    }
    powerSet.push(parseInt(cubeCount.red * cubeCount.green * cubeCount.blue));
    console.log(powerSet);
    console.log(cubeCount);
  }

  // Sum up the IDs of the possible games
  totalSum = powerSet.reduce((acc, cur) => acc + cur, 0);
  return totalSum;
}

let answer = processMultilineStrings(text);
console.log("Puzzle output:", answer);
