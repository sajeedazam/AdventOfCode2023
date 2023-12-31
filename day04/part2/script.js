function sumCardNumbers(scratchCards) {
  const cards = scratchCards.split("\n");
  let totalCards = 0;
  let cardObjArr = {};

  for (let card of cards) {
    let [cardString, numbers] = card.trim().split(":");
    let cardNumber = parseInt(cardString.match(/\d+/)[0]);
    let [winningNumbList, myNumbList] = numbers.trim().split("|");
    let winningNumbArr = winningNumbList.match(/\d+/g).map(Number);
    let myNumbArr = myNumbList.match(/\d+/g).map(Number);

    if (!cardObjArr[cardNumber]) {
      cardObjArr[cardNumber] = { instances: 1 };
    } else {
      cardObjArr[cardNumber].instances += 1;
    }

    const matches = winningNumbArr.filter((e) => myNumbArr.includes(e));

    if (cardObjArr[cardNumber].instances === 1) {
      for (let i = 1; i < matches.length + 1; i++) {
        const matchingCardNumber = cardNumber + i;
        if (!cardObjArr[matchingCardNumber]) {
          cardObjArr[matchingCardNumber] = { instances: 1 };
        } else {
          cardObjArr[matchingCardNumber].instances += 1;
        }
      }
    } else {
      for (let x = 0; x < cardObjArr[cardNumber].instances; x++) {
        for (let i = 1; i < matches.length + 1; i++) {
          const matchingCardNumber = cardNumber + i;
          if (!cardObjArr[matchingCardNumber]) {
            cardObjArr[matchingCardNumber] = { instances: 1 };
          } else {
            cardObjArr[matchingCardNumber].instances += 1;
          }
        }
      }
    }
  }

  for (const [key, value] of Object.entries(cardObjArr)) {
    totalCards += value.instances;
  }

  return totalCards;
}

let scratchCards = text;

console.log("Sum of scratch cards:", sumCardNumbers(scratchCards));
