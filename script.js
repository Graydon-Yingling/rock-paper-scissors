function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice >= 0 && computerChoice < 1/3) {
        return("rock");
    }else if (computerChoice >= 1/3 && computerChoice < 2/3) {
        return("paper");
    }else {
        return("scissors");
    };
};

function getHumanChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");

    return(playerChoice);
}

function playGame() {

    let humanChoice;
    let computerChoice;

    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();

        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    computerScore++;
                    console.log("Computer chose paper, you lose this round!");
                }else if (computerChoice === "scissors") {
                    humanScore++;
                    console.log("Computer chose scissors, you win this round!");
                }else {
                    console.log("Computer chose rock as well, It's a draw this round!");
                };
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    computerScore++;
                    console.log("Computer chose scissors, you lose this round!");
                }else if (computerChoice === "rock") {
                    humanScore++;
                    console.log("Computer chose rock, you win this round!");
                }else {
                    console.log("Computer chose paper as well, It's a draw this round!");
                };
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    computerScore++;
                    console.log("Computer chose rock, you lose this round!");
                }else if (computerChoice === "paper") {
                    humanScore++;
                    console.log("Computer chose paper, you win this round!");
                }else {
                    console.log("Computer chose scissors as well, It's a draw this round!");
                };
                break;
            default:
                console.log("Something broke, go fix it.");
                break;
        }
    };

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (computerScore > humanScore) {
        alert("Computer Wins!");
    }else if (humanScore > computerScore) {
        alert("You win!");
    }else {
        alert("It's a draw!")
    };
}

playGame();