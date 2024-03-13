const button = document.querySelector(".login-button");

const input = document.querySelector(".login-input");
const form = document.querySelector(".login-form");

//habilitar botão do nome
function validateInput({ target }) {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("desabled", "");
  }
}



function enviar(event) {
  event.preventDefault();
  console.log(input.value + " Logando....");
  localStorage.setItem("player", input.value);

  window.location = "pages/game.html";
}

input.addEventListener("input", validateInput);
form.addEventListener("submit", enviar);
