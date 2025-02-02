// Initialise human and computer scores
let humanScore = 0;
let computerScore = 0;

console.log("Hello World!");
playGame();


/* Computer's choice" Randomly returns rock, paper or scissors */
function getComputerChoice()
{
    let randomNumber = Math.random();
    if (randomNumber <= 0.33)
        return "rock";
    else if (randomNumber <= 0.66)
        return "paper";
    else
        return "scissors";
}

/* Returns human choice */
function getHumanChoice()
{
    return prompt("What is your choice? rock, paper or scissors");
}

/* Play round */
function playRound(humanChoice, computerChoice)
{
    if (humanChoice.toLowerCase() === computerChoice)
    {
        console.log("Tie");
    }
    else if ((humanChoice.toLowerCase() === "rock") && (computerChoice === "scissors"))
    {
        console.log("Human wins");
        humanScore++;
    }
    else if ((humanChoice.toLowerCase() === "rock") && (computerChoice === "paper"))
    {
        console.log("Computer wins");
        computerScore++;
        
    }
    else if ((humanChoice.toLowerCase() === "paper") && (computerChoice === "scissors"))
    {
        console.log("Computer wins");
        computerScore++;
    }
    else if ((humanChoice.toLowerCase() === "paper") && (computerChoice === "rock"))
    {
        console.log("Human wins");
        humanScore++;
    }
    else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice === "rock"))
    {
        console.log("Computer wins");
        computerScore++;
    }
    else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice === "paper"))
    {
        console.log("Human wins");
        humanScore++;
    }
    else
    {
        console.log("Incorrect input by human");
    }
                
}

/* A game of 5 founds*/
function playGame()
{

    // Variables to store human and computer selections */
    let humanSelection;
    let computerSelection;

    // Playing 5 rounds
    for (let i=0; i<5; i++)
    {
        // Get human and computer selection
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
     
        // Display human and computer selections
        console.log("Human - " + humanSelection);
        console.log("Computer - " + computerSelection);

        // Play round and display result
        console.log(playRound(humanSelection, computerSelection));
    }

    // Final scores
    console.log("Human Score: " + humanScore + "; Computer Score: " + computerScore);
    if (humanScore === computerScore)
    {
        console.log("TIE");
    } else if (humanScore > computerScore)
    {
        console.log("HUMAN WINS");
    } else
    {
        console.log("COMPUTER WINS");
    }

}