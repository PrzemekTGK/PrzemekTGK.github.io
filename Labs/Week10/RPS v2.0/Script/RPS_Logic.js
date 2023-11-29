
let choices = ['rock', 'paper', 'scissors'];
let roundsPlayed = 0;
let playerWon = false;
let playerChoice = null;
let computerChoice = null;
const maxRounds = 3;

function startGame() {
    document.getElementById('menuDiv').style.display = 'none';
    document.getElementById('gameDiv').style.display = 'block';
    setButtonsOff(false);
}

function playRound(playerInput) {
    playerChoice = playerInput;
    computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (playerChoice == 'rock') {
        document.getElementById('playerChoice').src = './Images/Rock.png';
    } else if (playerChoice == 'paper') {
        document.getElementById('playerChoice').src = './Images/Paper.png';
    } else {
        document.getElementById('playerChoice').src = './Images/Scissors.png';
    }

    if (computerChoice == 'rock') {
        document.getElementById('computerChoice').src = './Images/Rock.png';
    } else if (computerChoice == 'paper') {
        document.getElementById('computerChoice').src = './Images/Paper.png';
    } else {
        document.getElementById('computerChoice').src = './Images/Scissors.png';
    }

    if (playerChoice === computerChoice) {
        result = 'Tie';
        document.getElementById('gameDiv').style.backgroundColor = 'white';
        roundsPlayed++;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerWon = true;
        result = 'You Win!';
        document.getElementById('gameDiv').style.backgroundColor = 'green';
    } else {
        result = 'You Lose!';
        document.getElementById('gameDiv').style.backgroundColor = 'red';
        roundsPlayed++;
    }

    document.getElementById('result').innerHTML = result;
    
    if (playerWon){
        setButtonsOff(true);
        setTimeout(function () {
            alert("You Won!");
            resetGame();
        }, 1000);
    } else if (roundsPlayed === maxRounds) {
        setButtonsOff(true);
        setTimeout(function () {
            alert("You Loose!");
            resetGame();
        }, 1000);
    }
}

function setButtonsOff(toggle){
    document.getElementById('rock').disabled = toggle;
    document.getElementById('paper').disabled = toggle;
    document.getElementById('scissors').disabled = toggle;
}

function resetGame(){
    playerWon = false;
    playerChoice = "";
    computerChoice = "";
    result = "";
    roundsPlayed = 0;
    document.getElementById('playerChoice').src = "";
    document.getElementById('computerChoice').src = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('menuDiv').style.display = 'block';
    document.getElementById('gameDiv').style.display = 'none';
    document.getElementById('gameDiv').style.backgroundColor = 'white';
}