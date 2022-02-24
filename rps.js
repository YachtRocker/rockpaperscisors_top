function computerPlay()
{
    var pick = Math.floor(Math.random() * 3);

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
    console.log(playerSelection);
    console.log(computerSelection);

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        return "You Win!!!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        return "You Win!!!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        return "You Win!!!";
    }
    else if (playerSelection == computerSelection)
    {
        return "Tie, play again!"
    }
    else
    {
        return "Computer Wins!!!"
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));