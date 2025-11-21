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

  } else {

    Object.keys(rules).forEach(choise => {

      rules[choise].forEach(item => {
        console.log(resultado)
        if (rules[choise].includes(userChoise)) {
          resultado = "Has Ganado"
        } else{
          resultado= "Has Perdido"
        }
      });
    });
  }

  return resultado
}



console.log(jugar("rock"));


//  document.getElementById("yankenkun").textContent = jugar ("spock");




