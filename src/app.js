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
  if (userChoise === computerChoise) {
    document.getElementById("score").textContent = `Jugador:  ${userCount} Maquina: ${computerCount}`;
    return "Esto es un empate!"
  }
  if (rules[computerChoise].includes(userChoise)) {
    ++computerCount
    document.getElementById("score").textContent = `Jugador:  ${userCount} Maquina: ${computerCount}`;
    return "Has perdido " + computerChoise + " gana a " + userChoise
  }
  ++userCount
  document.getElementById("score").textContent = `Jugador:  ${userCount} Maquina: ${computerCount}`;
  return "Has ganado " + userChoise + " gana a " + computerChoise
}


choises.forEach(choice => {
  document.getElementById(`btn-${choice}`).addEventListener("click", () => {
    document.getElementById("yankenkun").textContent = jugar(choice)
  })
})







