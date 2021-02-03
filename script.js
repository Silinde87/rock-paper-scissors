let playerScore = 0;
let computerScore = 0;
let round = 1;
const MAX_WIN = 5;
updateScore();
let display = document.getElementById('display');

//This function generates a random computer play.
let computerPlay = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * options.length-1) + 1;
    return options[randomIndex];
}

//This function determines who is the winner and call updateScore()
let playRound = (playerSelection, computerSelection) => {
    let result = document.createElement('p');
    if(playerSelection === computerSelection){        
        result.textContent = `Round #${round}: Tie! ${playerSelection} and ${computerSelection}`;        
    }else if(playerSelection === 'Paper' && computerSelection === 'Rock' 
            || playerSelection ===  'Rock' && computerSelection === 'Scissors' 
            || playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore++;
        result.textContent = `Round #${round}: Win! ${playerSelection} beats ${computerSelection}`;  
    }else{
        computerScore++;
        result.textContent = `Round #${round}: Lose! ${computerSelection} beats ${playerSelection}`;
    }
    round++;
    display.insertBefore(result,display.firstChild);
    updateScore();
}

//This function updates the score at dom and checks if the game is over.
function updateScore(){
    if(playerScore <= MAX_WIN && computerScore <= MAX_WIN){
        let player = document.getElementById('player-result');
        player.textContent = playerScore;
        let computer = document.getElementById('com-result');
        computer.textContent = computerScore;
    }
    if(computerScore === MAX_WIN || playerScore === MAX_WIN){
        //Removes btn class at user buttons. Disables the click
        let btn = Array.from(document.getElementsByClassName('far'));
        btn.forEach(e => e.classList.remove('btn'));
        
        //Shows final Score at display
        let finalScore = document.createElement('p');
        computerScore === MAX_WIN ? finalScore.textContent = 'You Lose!' : 
                finalScore.textContent = 'You Win!';
        finalScore.setAttribute('style', 'font-size: 20px; font-weight: bold');
        display.insertBefore(finalScore,display.firstChild);        
    }
}

//This function reboot the game.
function start(){
    //Adds btn class at user buttons. Enables the click
    let btn = Array.from(document.getElementsByClassName('far'));
    btn.forEach(e => e.classList.add('btn'));
    //Reset and updates the scores
    playerScore = 0;
    computerScore = 0;
    round = 1;
    updateScore();
    //Cleans the display
    let display = document.getElementById('display');
    display.innerHTML = '';
}

//Mouse control
window.addEventListener('click', (e) => {    
    //This check controls the click
    if(e.target.className.includes('btn')){
        let playerSelection = e.target.id;
        playerSelection = e.target.id.charAt(0).toUpperCase() + playerSelection.slice(1);    
        playRound(playerSelection, computerPlay());    
    }
    if(e.target.id === 'start'){
        start();
    }
});