let qtdCards = prompt("Com quantas cartas você quer jogar?");
while (qtdCards % 2 !== 0 || qtdCards < 4 || qtdCards > 14) {
  qtdCards = prompt("Com quantas cartas você quer jogar?");
}

const cards = [qtdCards];

const teste = document.querySelector(".teste");

teste.innerHTML = qtdCards;
