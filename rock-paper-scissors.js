function playRound(playerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerPlay().toUpperCase();
    
    let result;
    if (playerSelection === computerSelection) {
        result = "tie";
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
                (playerSelection === "PAPER" && computerSelection === "ROCK") ||
                (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        result = "win";
    } else {
        result = "lose";
    }
    
    if (result === 'win') {
        return `You ${result}! ${playerSelection} beats ${computerSelection}.`
    } else {
        return `You ${result}! ${computerSelection} beats ${playerSelection}.`
    }
}

function computerPlay() {
    // Must randomly return 'Rock’, ‘Paper’ or ‘Scissors’
    let randomNumber = Math.floor(((Math.random() * 3) + 1))
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function game() {
    // Play five rounds and keep score
    let playerWins = 0;
    let computerWins = 0;
    for (let cnt = 0; cnt < 5; cnt++) {
        let playerChoice = prompt("Rock, paper, or scisssors? ");
        let result = playRound(playerChoice,computerPlay());
        result.includes("win") ? playerWins++ : computerWins++;
    }
    console.log(`The player won ${playerWins} of five rounds`);
}

// Default scores to zero


// Event listener for each button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    const compAnswer = computerPlay();
    button.addEventListener('click', () => {
        let result = playRound(button.className,compAnswer);
        
        const playerResult = document.querySelector('.your-score');
        const computerResult = document.querySelector('.computer-score');

        if (result.includes("win")) {
            playerResult.textContent++
        }
        else {
            computerResult.textContent++;
        }

        if (playerResult.textContent >= 5) {
            const totalResults = document.querySelector('.total-results');
            totalResults.textContent = 'YOU WIN!!!!!!!';
        } else if (computerResult.textContent >= 5) {
            const totalResults = document.querySelector('.total-results');
            totalResults.textContent = 'YOU LOSE';
        }
    })
})
