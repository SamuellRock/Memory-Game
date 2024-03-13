const spanPlayer = document.querySelector(".player");
const cronometro = document.querySelector('.timer');
const grid = document.querySelector(".grid");

//Função para informar quais cartas serão usadas
const cardsName = [
  "almeida",
  "andrade",
  "barros",
  "brito",
  "cabral",
  "machado",
  "marinho",
  "oliveira",
  "rocha",
  "rodrigues",
  "santos",
  "silva",
  "siqueira",
  "souza",
  "teixeira",
];

let firstCard = "";
let secondCard = "";

//Evento de fim de jogo
function checkEnd() {
  const checkDisabled = document.querySelectorAll(".disabled-card");

  if (checkDisabled.length == 30) {
    alert("PARABENS, VOCÊ É O NOVO REI!! ");
  }
}


function checkCards() {
  const firstName = firstCard.getAttribute("data-name");
  const secondName = secondCard.getAttribute("data-name");

  if (firstName == secondName) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEnd();
  } else {
    setTimeout(function () {
      firstCard.classList.remove("reveal");
      secondCard.classList.remove("reveal");

      firstCard = "";
      secondCard = "";
    }, 600);
  }
}

const revealcard = function ({ target }) {
  if (firstCard == "") {
    target.parentNode.classList.add("reveal");
    firstCard = target.parentNode;
  } else if (secondCard == "") {
    target.parentNode.classList.add("reveal");
    secondCard = target.parentNode;

    checkCards();
  }
};

//Funções que cria as TAGS no HTML -------------------------
function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}
//forma que chama a função a cima
function createCard(name) {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  //editando o game.css
  front.style.backgroundImage = `url('../IMGbr/${name}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealcard);

  card.setAttribute("data-name", name);
  return card;
}

createCard();

//forma criando passo a passo
/*
function createCard() {
  const card = document.createElement("div");
  const front = document.createElement("div");
  const back = document.createElement("div");

  card.className = "card";
  front.className = "face front";
  back.className = "face back";

  card.appendChild(front);
  card.appendChild(back);

  grid.appendChild(card);
}*/
//------------------------------------------------------------

// Função para carregar o Game
function loadGame() {
  const duplicate = [...cardsName, ...cardsName]; //duplica as cartas

  //embaralha as carats
  const embaralhar = duplicate.sort(function () {
    const embaralha = Math.random() - 0.5;
    return embaralha;
  });

  embaralhar.forEach(function (name) {
    const card = createCard(name);
    grid.appendChild(card);
  });
}

const startTimer = function() {
    setInterval (function() {
      
        const segundos = Number(timer.innerHTML);
        timer.innerHTML = segundos + 1;

    }, 1000)
}




window.onload = function () {
  const playerName = localStorage.getItem("player");
  spanPlayer.innerHTML = playerName;

  startTimer();
  loadGame();
};
