//JS
let computerPlay = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * options.length-1) + 1;
    return options[randomIndex];
}

let playerPlay = () => {
    let sentencePrompt = 'Introduce your play (Rock, Paper or Scissors):';
    let playerSelection;
    while(playerSelection !== 'rock' && playerSelection !== 'paper' 
            && playerSelection !== 'scissors'){
        playerSelection = prompt(sentencePrompt);
        playerSelection = playerSelection.toLowerCase();
    }
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return playerSelection;
}

let playRound = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection){
        return `Tie! ${playerSelection} and ${computerSelection}`;
    }
    if(playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection ===  'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    while(playerScore < 5 && computerScore < 5){
        let result = playRound(playerPlay(), computerPlay());
        if(result.indexOf('Win') !== -1){
            playerScore++; 
        }else if(result.indexOf('Lose') !== -1){
            computerScore++;
        }
        console.log(`Round #${round++}: ${result}`)
        console.log(`Score: ${playerScore} - ${computerScore}`)
    }
    if(playerScore === 5){
        console.log(`PLAYER WIN!`);
    }else{
        console.log(`COM WIN!`);
    }
}

game();