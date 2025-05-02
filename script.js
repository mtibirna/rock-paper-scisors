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

const showResult = document.createElement('p')

let humanScore = 0;
let computerScore = 0;

const roundResult = document.getElementById('round-result');
const score = document.getElementById('score');

    function playRound(humanChoice) {
        const computerChoiceResult = getComputerChoice();
        if (humanChoice === computerChoiceResult) {
            roundResult.textContent = "It's a tie. Play again!";
        } else if (humanChoice === 'rock' && computerChoiceResult === 'scisors') {
            roundResult.textContent = "Human wins";
            humanScore++;
        } else if (humanChoice === "scisors" && computerChoiceResult === 'rock') {
            roundResult.textContent = "Computer wins";
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoiceResult === 'rock') {
            roundResult.textContent = "Human wins";
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoiceResult === 'paper') {
            roundResult.textContent = "Computer wins";
            computerScore++;
        } else if (humanChoice === 'scisors' && computerChoiceResult === 'paper') {
            roundResult.textContent = "Human wins";
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoiceResult === 'scisors') {
            roundResult.textContent = "Computer wins";
            computerScore++;
        }
        score.textContent = 'Human: ' + humanScore + ' Computer: ' + computerScore;
        
        if (humanScore === 5) {
            roundResult.textContent = 'Human win the game!';
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            roundResult.textContent = 'Computer win the game!';
            humanScore = 0;
            computerScore = 0;
        }
    }


    
