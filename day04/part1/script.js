function sumCardNumbers(scratchCards) {
  const cards = scratchCards.split("\n");
  let points = [];

  for (let card of cards) {
    let [cardNumber, numbers] = card.trim().split(":");
    let [winningNumbList, myNumbList] = numbers.trim().split("|");
    let winningNumbArr = matchRegex(winningNumbList);
    let myNumbArr = matchRegex(myNumbList);

    const matches = winningNumbArr.filter((e) => myNumbArr.includes(e));

    if (matches.length === 0) {
      points.push(0);
    } else {
      points.push(2 ** (matches.length - 1));
    }
  }
  let totalPoints = points.reduce((acc, cur) => acc + cur, 0);
  return totalPoints;
}

function matchRegex(list) {
  let i = 0;
  let resultArr = [];
  for (let match of list.matchAll(/\d+/g)) {
    resultArr.push(match);
    i += 1;
  }
  return resultArr.map(Number);
}

let scratchCards = text;
console.log("Sum of Total Points:", sumCardNumbers(scratchCards));
