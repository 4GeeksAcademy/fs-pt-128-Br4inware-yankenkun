//import "bootstrap";
//import "./style.css";

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
    resultado = "Has perdido"
  } else {
    resultado = "Has ganado "
  }


    return resultado
  }



  document.getElementById("yankenkun").textContent = jugar("spock");




