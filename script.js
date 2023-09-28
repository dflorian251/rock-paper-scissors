function getComputerChoice(){
    let computerChoice;
    let number = Math.floor(Math.random() * 3 + 1);
    if (number == 1){
        computerChoice = "rock";
    }else if (number == 2){
        computerChoice = "paper";
    }else {
        computerChoice = "scissors";
    }
    return computerChoice ; 
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase() ;
    
    if (playerSelection == "paper") { // Player selects paper
        if (computerSelection == "scissors"){
            return "You lose! Scissors beat paper." ;
        }else if (computerSelection == "rock") {
            return "You win! Paper wins rock.";
        }else { 
            return "Draw!" ;
        }
    }else if (playerSelection == "rock"){ // Player selects rock
        if (computerSelection == "paper") {
            return "You lose ! Paper wins rock." ;
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats scissors!";
        }else { 
            return "Draw!" ;
        }
    }else if (playerSelection == "scissors") { // Player selects scissors
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors." ;
        }else if (computerSelection == "paper") {
            return "You win! Scissors beats paper." ;
        }else { 
            return "Draw!" ;
        }
    }
}


const playerSelection = 'rock' ; 
const computerSelection = getComputerChoice() ;
console.log(playRound(playerSelection, computerSelection)) ;