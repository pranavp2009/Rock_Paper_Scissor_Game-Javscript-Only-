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


function getHumanChoice(){
    let humanChoice = parseInt(prompt('Enter your choice (1->rock, 2->paper, 3->scissor)'))
    
    switch(humanChoice){
        case 1:
            return 'ROCK'
            break
        case 2:
            return 'PAPER'
            break
        case 3:
            return 'SCISSOR'
            break;
    }
}

let ComputerScore = 0
let HumanScore = 0

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice){
        console.log('Tie, No points assigned')
    }else if (humanChoice === 'ROCK' && computerChoice === 'SCISSOR' || humanChoice === 'PAPER' && computerChoice === 'ROCK' || humanChoice === 'SCISSOR' && computerChoice === 'PAPER'){
        HumanScore ++
        console.log(`You get a point. ${humanChoice} beats ${computerChoice}`)
    }else{
        ComputerScore ++
        console.log(`Computer gets a point. ${computerChoice} beats ${humanChoice}`)
    }
}


function playGame(){
   

    for (let i = 0; i<5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
        console.log(HumanScore)
        console.log(ComputerScore)
    }

    if (HumanScore> ComputerScore){
        console.log('You win')
    }else if (HumanScore < ComputerScore){
        console.log('Computer wins')
    } else{
        console.log('Tie')
    }
}

playGame()