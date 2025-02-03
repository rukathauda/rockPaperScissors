// Initialise human and computer scores
let humanScore = 0;
let computerScore = 0;

console.log("Hello World!");

// playGame();

let selectionList = document.querySelector("#list");

selectionList.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id){
        case "rock":
            console.log("Selected rock");
            playRound("rock", getComputerChoice());
            break;
        case "paper": 
            console.log("Selected paper");
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            console.log("Selected scissors");
            playRound("scissors", getComputerChoice());
            break;
        default:
            console.log("ERROR: incorrect selection");
}
})
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
    // Tie
    if (humanChoice.toLowerCase() === computerChoice)
    {
        console.log("Tie");
    }
    // Next we enumerate all the different options which are not a tie
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