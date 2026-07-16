

function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice > 0 && rand < 1/3) {
        return("Rock");
    }else if (computerChoice >= 1/3 && rand < 2/3) {
        return("Paper");
    }else {
        return("Scissors");
    };
};

function getHumanChoice() {
    let playerChoice = prompt("What's Your Play?");

    return(playerChoice);
}