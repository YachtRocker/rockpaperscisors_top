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

    if (playerSelection == "Rock" && computerSelection == "Scissors")
    {
        return "You Win!!!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock")
    {
        return "You Win!!!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper")
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