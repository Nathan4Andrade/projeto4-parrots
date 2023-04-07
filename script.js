let PARROTS = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

let qtdCards = 0;
const cards = [];
const ulCards = document.querySelector(".cards");

function startGame() {
  qtdCards = prompt("Com quantas cartas você quer jogar?");
  while (qtdCards % 2 !== 0 || qtdCards < 4 || qtdCards > 14) {
    qtdCards = prompt("Com quantas cartas você quer jogar?");
  }

  displayCards(qtdCards);
  for (let i = 0; i < qtdCards; i++) {
    ulCards.innerHTML += `<li onClick="clickCard()" class="card"></li>`;
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

startGame();
