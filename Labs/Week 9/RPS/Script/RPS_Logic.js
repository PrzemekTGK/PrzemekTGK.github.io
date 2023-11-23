function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var isTie = false;

    var result = '';

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
    } else if ( 
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You Win!';
        isTie = false;
        document.getElementById('gameDiv').style.backgroundColor = 'green';
    } else {
        result = 'You Lose!';
        isTie = false;
        document.getElementById('gameDiv').style.backgroundColor = 'red';
    }

    document.getElementById('result').innerHTML = result;
}