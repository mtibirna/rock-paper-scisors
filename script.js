function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3)
    let computerChoice = ''
    
    if (randomValue === 0) {
        computerChoice = 'rock'
    } else if (randomValue === 1) {
        computerChoice = "paper"
    } else if (randomValue === 2) {
        computerChoice = "scisors"
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?")

    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie. Play again!")
        } else if (humanChoice === 'rock' && computerChoice === 'scisors') {
            console.log("Human wins");
            humanScore++;
        } else if (humanChoice === "scisors" && computerChoice === 'rock') {
            console.log("Computer wins");
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("Human wins");
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("Computer wins");
            computerScore++;
        } else if (humanChoice === 'scisors' && computerChoice === 'paper') {
            console.log("Human wins");
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scisors') {
            console.log("Computer wins");
            computerScore++;
        }
        console.log(humanScore);
        console.log(computerScore);
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("Human: " + humanSelection);
        console.log("Computer: " + computerSelection)
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore < humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
