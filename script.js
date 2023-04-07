let parrots = [
  "../img/bobrossparrot.gif",
  "../img/explodyparrot.gif",
  "../img/fiestaparrot.gif",
  "../img/metalparrot.gif",
  "../img/revertitparrot.gif",
  "../img/tripletsparrot.gif",
  "../img/unicornparrot.gif",
];

let qtdCards = 0;
const deckOfCards = [];
let move = [];
const ulCards = document.querySelector(".cards");

function startGame() {
  qtdCards = prompt("Com quantas cartas você quer jogar?");
  while (qtdCards % 2 !== 0 || qtdCards < 4 || qtdCards > 14) {
    qtdCards = prompt("Com quantas cartas você quer jogar?");
  }

  displayCards(qtdCards);
  for (let i = 0; i < qtdCards; i++) {
    ulCards.innerHTML += `<li onClick="clickCards(this)" class="card"> 
                               <div class="front-face face">
                                    <img data-test="face-down-image" src="../img/back.png" alt="">
                                </div>
                                <div class="back-face face">
                                    <img data-test="face-up-image" src="${parrots[i]}" alt="">
                                </div>
                                
                            </li>`;
  }
}

function displayCards(qtdCards) {
  if (qtdCards == 4) {
    ulCards.classList.add("four");
  } else if (qtdCards == 6) {
    ulCards.classList.add("six");
  } else if (qtdCards == 8) {
    ulCards.classList.add("eight");
  } else if (qtdCards == 10) {
    ulCards.classList.add("ten");
  } else if (qtdCards == 12) {
    ulCards.classList.add("twelve");
  } else if (qtdCards == 14) {
    ulCards.classList.add("fourteen");
  }
}

function comparator() {
  return Math.random() - 0.5;
}

function shuffleCards() {
  return deckOfCards.sort(comparator);
}

function shuffleInitialVariables() {
  return parrots.sort(comparator);
}

function clickCards(clickedCard) {
  if (isAValidCard(clickedCard)) {
    clickedCard.classList.toggle("flipped");
    move.push(clickedCard);

    if (move.length === 2) {
      preventsAdditionalClicks();
      checksIdenticalsCards();
    }
  }
}

function isAValidCard(card) {
  const flipped = card.classList.contains("flipped");
  const right = card.classList.contains("rigth");

  return !flipped || !right;
}

startGame();
