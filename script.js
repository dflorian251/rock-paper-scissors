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


let computerSelection = getComputerChoice();

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase() ;
    
    if (playerSelection == "paper") { // Player selects paper
        if (computerSelection == "scissors"){
            console.log("You lose! Scissors beat paper.");
        }else if (computerSelection == "rock") {
            console.log("You win! Paper wins rock.");
        }
    }else if (playerSelection == "rock"){ // Player selects rock
        if (computerSelection == "paper") {
            console.log("You lose ! Paper wins rock.");
        } else if (computerSelection == "scissors") {
            console.log("You win! Rock beats scissors!")
        }
    }else if (playerSelection == "scissors") { // Player selects scissors
        if (computerSelection == "rock") {
            console.log("You lose! Rock beats scissors.")
        }else if (computerSelection == "paper") {
            console.log("You win! Scissors beats paper.")
        }
    } else { //Player and computer select the same
        console.log("Draw!")
    }
}

