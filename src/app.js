import "bootstrap";
import "./style.css";

//write your code here

const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
}


let userCount = 0;
let computerCount = 0;
const jugar = (userChoise) => {


  let computerChoise = choises[Math.floor(Math.random() * choises.length)]
  let resultado
  if (userChoise === computerChoise) {

    resultado = "Esto es un empate!"

  } else if (rules[computerChoise].includes(userChoise)) {
    resultado = "Has perdido " + computerChoise + " gana a " + userChoise
    ++computerCount
  } else {
    resultado = "Has ganado " + userChoise + " gana a " + computerChoise
    ++userCount
  }


  document.getElementById("score").textContent = `Jugador:  ${userCount} Maquina: ${computerCount}`;
  return resultado
}



document.getElementById("btn-rock").addEventListener("click", () => {

  document.getElementById("yankenkun").textContent = jugar("rock");
})
document.getElementById("btn-paper").addEventListener("click", () => {

  document.getElementById("yankenkun").textContent = jugar("paper");
})
document.getElementById("btn-scissors").addEventListener("click", () => {

  document.getElementById("yankenkun").textContent = jugar("scissors");
})
document.getElementById("btn-lizard").addEventListener("click", () => {

  document.getElementById("yankenkun").textContent = jugar("lizard");
})
document.getElementById("btn-spock").addEventListener("click", () => {

  document.getElementById("yankenkun").textContent = jugar("spock");
})







