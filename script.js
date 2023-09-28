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
            return "Computer wins! Scissors beat paper." ;
        }else if (computerSelection == "rock") {
            return "Player wins! Paper wins rock.";
        }else { 
            return "Draw!" ;
        }
    }else if (playerSelection == "rock"){ // Player selects rock
        if (computerSelection == "paper") {
            return "Computer wins! Paper wins rock." ;
        } else if (computerSelection == "scissors") {
            return "Player wins! Rock beats scissors!";
        }else { 
            return "Draw!" ;
        }
    }else if (playerSelection == "scissors") { // Player selects scissors
        if (computerSelection == "rock") {
            return "Computer wins! Rock beats scissors." ;
        }else if (computerSelection == "paper") {
            return "Player wins! Scissors beats paper." ;
        }else { 
            return "Draw!" ;
        }
    }
}


function checkWinner(playerWins, computerWins) {
    if (playerWins > computerWins) {
        return "You win the game :)";
    }else if(playerWins < computerWins) {
        return "You lose the game :(" ;
    }else {
        return "The game was a draw" ;
    }
}



let playerSelection ; 
let computerSelection ;

let playerWins = 0;
let computerWins = 0 ;
let winnerOfRound;
while ( (playerWins < 5) && (computerWins < 5) ) {
    playerSelection = prompt("What's your selection ?")
    computerSelection = getComputerChoice() ;
    winnerOfRound = playRound(playerSelection, computerSelection);
    console.log(winnerOfRound) ;
    if (winnerOfRound.charAt(0) == 'P'){
        playerWins++;
    }
    if (winnerOfRound.charAt(1) == 'C') {
        computerWins++;
    }
}

console.log(checkWinner(playerWins, computerWins)) ;

