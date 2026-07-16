

function getComputerChoice() {
    let rand = Math.random();

    if (rand > 0 && rand < 1/3) {
        return("Rock");
    }else if (rand >= 1/3 && rand < 2/3) {
        return("Paper");
    }else {
        return("Scissors");
    };
};