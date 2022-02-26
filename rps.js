var playerWins = 0;
var computerWins = 0;

const choices = document.querySelector('rpc');
const results = document.querySelector('.results');
const restart = document.querySelector('#restart');
const score = document.querySelector('.score');

gameStart();

game();

function computerPlay()
{
    let pick = Math.floor(Math.random() * 3);

    if(pick == 0)
    {
        return "Rock";
    }
    else if (pick == 1)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }    
}


function playRound(playerSelection, computerSelection)
{    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        results.textContent = `You Won!! ${playerSelection} beats ${computerSelection}!`;
        playerWins++;
        scoreUpdate();
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        results.textContent = `You Won!! ${playerSelection} beats ${computerSelection}!`;
        playerWins++;
        scoreUpdate();
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        results.textContent = `You Won!! ${playerSelection} beats ${computerSelection}!`;
        playerWins++;
        scoreUpdate();
    }
    else if (playerSelection == computerSelection)
    {
        results.textContent = `It's a Tie ${playerSelection} is the same as ${computerSelection}!`;
    }
    else
    {
        results.textContent = `You Lost!! :( ${computerSelection} beats ${playerSelection}!`;
        computerWins++;
        scoreUpdate();
    }

    score.textContent = `${playerWins} - ${computerWins}`;
}

function gameStart()
{
    playerWins = 0;
    computerWins = 0;

    results.textContent = "";
    score.textContent = `${playerWins} - ${computerWins}`;
}


function scoreUpdate() 
{
    if (playerWins == 5) 
    {
        score.textContent = "You've won!!";
        gameEnd();
    } 
    else if (computerWins == 5) 
    {
        score.textContent = "You've Lost!!"
        gameEnd();
    } 
    else 
    {
        score.textContent = `${playerScore} - ${computerScore}`;
    }
}


function game(clicked_id)
{    
    let playerSelection = clicked_id;   
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}


// https://github.com/JunJunBahadur/rock-paper-scissors/blob/main/jquery.js