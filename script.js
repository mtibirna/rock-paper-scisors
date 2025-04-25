let humanScore = 0;
let computerScore = 0;

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
    } else if (humanChoice === 'paper' && computerChoice === 'scrisors') {
        console.log("Computer wins");
        computerScore++;
    }

    return humanScore, computerScore;
}

//define playGame function that calls playRound
//the game is 5 rounds so the prompt should appear 5 times
//If it's a tie then the round repeats till it's not a tie
//Compare the end results and define the winner - if humanScore is > than computerScore then human is winner, else Computer is winner;
//

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection, computerSelection);
console.log("Human score: " + humanScore, "Computer score: " + computerScore)

playRound(humanSelection, computerSelection);
