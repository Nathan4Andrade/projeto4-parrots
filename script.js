let parrots = [
  "./img/bobrossparrot.gif",
  "./img/explodyparrot.gif",
  "./img/fiestaparrot.gif",
  "./img/metalparrot.gif",
  "./img/revertitparrot.gif",
  "./img/tripletsparrot.gif",
  "./img/unicornparrot.gif",
];

let qtdCards = 0;
const deckOfCards = [];
let move = [];
const ulCards = document.querySelector(".cards");
let counter = 0;
let timer = 0;
let interval = 0;

randomDeck();
startGame();
displayCards(qtdCards);

makePairs();
randomCards();
renderCards();
interval = setInterval(startsTimer, 1000);

function startGame() {
  qtdCards = prompt(
    "Com quantas cartas você quer jogar? Escolha entre 4 e 14."
  );
  while (qtdCards % 2 !== 0 || qtdCards < 4 || qtdCards > 14) {
    qtdCards = prompt(
      "Com quantas cartas você quer jogar? Escolha entre 4 e 14."
    );
  }
}

function renderCards() {
  for (let i in deckOfCards) {
    const card = deckOfCards[i];
    ulCards.innerHTML += card;
  }
}

function createCard(index) {
  const parrot = parrots[index];
  const cardHTML = `<li onClick="clickCards(this)" class="card" data-test="card"> 
                        <div class="front-face face">
                            <img data-test="face-down-image" src="./img/back.png" alt="">
                          </div>
                          <div class="back-face face">
                            <img data-test="face-up-image" src="${parrot}" alt="${parrot}">
                          </div>
                    </li>`;
  return cardHTML;
}

function makePairs() {
  const quantityOfPairs = qtdCards / 2;
  for (let i = 0; i < quantityOfPairs; i++) {
    const card = createCard(i);
    deckOfCards.push(card);
    deckOfCards.push(card);
  }
  return deckOfCards;
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

function randomCards() {
  return deckOfCards.sort(comparator);
}

function randomDeck() {
  return parrots.sort(comparator);
}

function clickCards(clickedCard) {
  if (isAValidCard(clickedCard)) {
    clickedCard.classList.add("flipped");
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

function preventsAdditionalClicks() {
  document.querySelector(".cards").classList.add("no-click");
}

function allowClicks() {
  document.querySelector(".cards").classList.remove("no-click");
}

function checksIdenticalsCards() {
  const firstMove = move[0];
  const secondMove = move[1];

  if (firstMove.innerHTML === secondMove.innerHTML) {
    firstMove.classList.add("right");
    secondMove.classList.add("right");
    setTimeout(checkTheEndOfTheGame, 500);
  } else {
    setTimeout(turnCardToInitialPosition, 1000);
  }
  counter++;
}

function turnCardToInitialPosition() {
  move.forEach((element) => {
    element.classList.remove("flipped");
  });
  allowClicks();
  move = [];
}

function checkTheEndOfTheGame() {
  const numberOfFlippedCards = document.querySelectorAll(".right").length;

  if (qtdCards == numberOfFlippedCards) {
    alert(
      `Você ganhou em ${counter} jogadas! A duração do jogo foi de ${timer} segundos`
    );
    clearInterval(interval);
    restartGame();
  } else {
    allowClicks();
    move = [];
  }
}

function restartGame() {
  const restart = prompt("Você gostaria de reiniciar a partida? (sim ou não)");

  if (restart === "sim") {
    window.location.reload(true);
  } else if (restart === "não") {
    console.log("jogo terminado");
  } else {
    restartGame();
  }
}

function startsTimer() {
  timer++;
  document.querySelector(".timer").innerHTML = timer;
}
