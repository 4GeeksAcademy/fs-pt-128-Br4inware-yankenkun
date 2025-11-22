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

const jugar = (userChoise) => {

  let computerChoise = choises[Math.floor(Math.random() * 5)]
  let resultado
  if (userChoise === computerChoise) {

    resultado = "Esto es un empate!"

  } else if (rules[computerChoise].includes(userChoise)) {
    resultado = `Has perdido, ${computerChoise} gana a ${userChoise}`
  } else {
    resultado = `Has Ganado, ${userChoise} gana a ${computerChoise}`
  }


    return resultado
  }



  document.getElementById("yankenkun").textContent = jugar();
 /*  document.getElementById("btn-rock").textContent = jugar('rock');
  document.getElementById("btn-paper").textContent = jugar('paper');
  document.getElementById("btn-scissors").textContent = jugar('scissors');
  document.getElementById("btn-lizard").textContent = jugar('lizard');
  document.getElementById("btn-spock").textContent = jugar('spock');
 */



