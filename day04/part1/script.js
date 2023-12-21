function sumCardNumbers(scratchCards) {
  const cards = scratchCards.split("\n");
  let points = [];

  for (let card of cards) {
    let [cardNumber, numbers] = card.trim().split(":");
    let [winningNumbList, myNumbList] = numbers.trim().split("|");
    let winningNumbArr = winningNumbList.match(/\d+/g).map(Number);
    let myNumbArr = myNumbList.match(/\d+/g).map(Number);

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

let scratchCards = text;
console.log("Sum of Total Points:", sumCardNumbers(scratchCards));
