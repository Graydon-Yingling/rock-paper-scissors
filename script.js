let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
rockButton.addEventListener('click', () => playRound("rock"));
paperButton.addEventListener('click', () => playRound("paper"));
scissorsButton.addEventListener('click', () => playRound("scissors"));

const gameMessage = document.querySelector('.output-text');

const computerScoreText = document.querySelector('.computer-number');
const humanScoreText = document.querySelector('.player-number');

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

function updateScore(scoreToUpdate) {

    if (scoreToUpdate === "computerScore") {
        computerScore++;
        computerScoreText.textContent = computerScore.toString();
        gameMessage.textContent = "Your Opponent Won This Round!"
    }else if (scoreToUpdate === "humanScore") {
        humanScore++;
        humanScoreText.textContent = humanScore.toString();
        gameMessage.textContent = "You won this round!"
    } else if (scoreToUpdate === "tie") {
        gameMessage.textContent = "This Round Was A Tie!"
    };


    if (computerScore >= 5) {
        document.body.replaceChildren()
        document.body.style.backgroundColor = "red";
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';
        const heading = document.createElement('h1');
        heading.textContent = 'YOU LOSE!';
        document.body.appendChild(heading);

    }else if (humanScore >= 5) {
        document.body.replaceChildren();
        document.body.style.backgroundColor = "green";
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';
        const heading = document.createElement('h1');
        heading.textContent = 'YOU WIN!';
        document.body.appendChild(heading);

    }
};

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                updateScore("computerScore");
            }else if (computerChoice === "scissors") {
                updateScore("humanScore");
            }else {
                updateScore("tie");
            };
            break;
        case "paper":
            if (computerChoice === "scissors") {
                updateScore("computerScore");
            }else if (computerChoice === "rock") {
                updateScore("humanScore");
            }else {
                updateScore("tie");
            };
            break;
        case "scissors":
            if (computerChoice === "rock") {
                updateScore("computerScore");
            }else if (computerChoice === "paper") {
                updateScore("humanScore");
            }else {
                updateScore("tie");
            };
            break;
        default:
            alert("Something broke, go fix it.");
            break;
    }
};