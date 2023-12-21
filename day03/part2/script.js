// adapted from https://github.com/hiimjustin000/advent-of-code/blob/master/2023/day3/part1.js

function sumPartNumbers(engineSchematic) {
  const row = engineSchematic.split("\n");
  let resultArray = [];

  const numberIndices = [];
  for (let i = 0; i < row.length; i++) {
    const numbers = row[i].replace(/\./g, " ");

    for (const match of numbers.matchAll(/\*/g)) {
      for (let j = match.index; j < match.index + match[0].length; j++) {
        const surrounding = [
          (row[i - 1] ?? "")[j - 1] ?? ".",
          (row[i - 1] ?? "")[j] ?? ".",
          (row[i - 1] ?? "")[j + 1] ?? ".",
          (row[i] ?? "")[j - 1] ?? ".",
          (row[i] ?? "")[j] ?? ".",
          (row[i] ?? "")[j + 1] ?? ".",
          (row[i + 1] ?? "")[j - 1] ?? ".",
          (row[i + 1] ?? "")[j] ?? ".",
          (row[i + 1] ?? "")[j + 1] ?? ".",
        ];
        const indices = [
          [i - 1, j - 1],
          [i - 1, j],
          [i - 1, j + 1],
          [i, j - 1],
          [i, j],
          [i, j + 1],
          [i + 1, j - 1],
          [i + 1, j],
          [i + 1, j + 1],
        ];
        const localNumberIndices = [];
        for (let k = 0; k < surrounding.length; k++) {
          if (
            /\d/.test(surrounding[k]) &&
            (!/\d/.test(surrounding[k - 1] ?? "") || k % 3 == 0)
          )
            localNumberIndices.push(indices[k]);
        }
        if (localNumberIndices.length == 2)
          numberIndices.push(...localNumberIndices);
      }
    }
  }

  for (const index of numberIndices) {
    const [i, j] = index;
    const line = row[i];
    const num = ["", "", "", line[j], "", "", ""];
    if (/\d/.test(line[j - 1] ?? "")) num[2] = line[j - 1];
    if (num[2] != "" && /\d/.test(line[j - 2] ?? "")) num[1] = line[j - 2];
    if (num[1] != "" && /\d/.test(line[j - 3] ?? "")) num[0] = line[j - 3];
    if (/\d/.test(line[j + 1] ?? "")) num[4] = line[j + 1];
    if (num[4] != "" && /\d/.test(line[j + 2] ?? "")) num[5] = line[j + 2];
    if (num[5] != "" && /\d/.test(line[j + 3] ?? "")) num[6] = line[j + 3];
    resultArray.push(num.join(""));
  }

  return resultArray.reduce(
    (a, x, i, r) => a + (i % 2 == 0 ? parseInt(x) * parseInt(r[i + 1]) : 0),
    0
  );
}

// Example engine schematic
let engineSchematic = text;

console.log("Sum of Gear Ratios:", sumPartNumbers(engineSchematic));
