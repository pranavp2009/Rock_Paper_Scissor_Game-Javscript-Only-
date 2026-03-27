/*
The logic
    function:
        getComputerChoice() -> It gets the computers choice
            Random logic -> Math.floor(Math.random() * (3)) + 1
        getHumanChoice() -> It gets the humans choice
        playRound() -> It plays one round
        playGame() -> It plays the game (5 rounds)
*/

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * (3)) + 1

    switch(compChoice){
        case 1: 
            return 'ROCK'
            break;
        case 2:
            return 'PAPER'
            break;
        case 3:
            return 'SCISSOR'
            break;
    }
}

console.log(getComputerChoice())