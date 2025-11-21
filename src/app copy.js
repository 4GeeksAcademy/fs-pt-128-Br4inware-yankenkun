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

  } else if (userChoise === choises[0]) {
    
    if (rules.rock.includes(computerChoise)) {

      resultado = " Has Ganado"
    } 
      resultado = "has perdido"
  } else if ( userChoise === choises[1]){
    if (rules.paper.includes(computerChoise)) {

      resultado = " Has Ganado"
    } 
      resultado = "has perdido"
  } else if ( userChoise === choises[2]){
    if (rules.scissors.includes(computerChoise)) {

      resultado = " Has Ganado"
    } 
      resultado = "has perdido"
  } else if ( userChoise === choises[3]){
    if (rules.lizard.includes(computerChoise)) {

      resultado = " Has Ganado"
    } 
      resultado = "has perdido"
  } else if ( userChoise === choises[4]){
    if (rules.spock.includes(computerChoise)) {

      resultado = " Has Ganado"
    } 
      resultado = "has perdido"
  }





  return resultado
}



  console.log(jugar("rock"));


//  document.getElementById("yankenkun").textContent = jugar ("spock");




