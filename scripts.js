// Initialise human and computer scores
let humanScore = 0;
let computerScore = 0;


console.log("Hello World!");

// playGame();


function diplayScores(humanChoice, computerChoice, thisRoundResult)
{

    // Uppoercase results
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    thisRoundResult = thisRoundResult.toUpperCase();
    
    // Added the div section for results
    const divSection = document.querySelector("div");
    
    // Removing previous results
    const paras = document.querySelectorAll("p");
    paras.forEach(element => {
        element.remove();
    });

    // Last round results
    const thisRoundPara = document.createElement("p");
    thisRoundPara.innerHTML = "This round - Computer choice: <em>" + computerChoice + "</em>; Human choice: <em>" + humanChoice + "</em>; Result: <em>" + thisRoundResult + "</em>";
  //  thisRoundPara.textContent = "This round - Computer choice: " + computerChoice + "; Human choice: " + humanChoice + "; Result: " + thisRoundResult;
    divSection.appendChild(thisRoundPara);

    // Computer score
    const compScoreSection = document.createElement("p");
    compScoreSection.textContent = "Computer Score: " + computerScore;
    divSection.appendChild(compScoreSection);
    
    // Human score
    const humScoreSection = document.createElement("p");
    humScoreSection.textContent = "Human Score: " + humanScore;
    divSection.appendChild(humScoreSection);    

    // Winner of the round
    const roundWinner = document.createElement("p");
    if (humanScore === 5)
    {
        roundWinner.innerHTML = "<strong> <em> WINNER: HUMAN! </em> - Reaching score of 5 first </strong>";
        divSection.appendChild(roundWinner); 
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5)
    {
        roundWinner.innerHTML = "<strong> <em> WINNER: COMPUTER! </em> - Reaching score of 5 first </strong>";
        divSection.appendChild(roundWinner); 
        humanScore = 0;
        computerScore = 0;
    }
}

let selectionList = document.querySelector("#list");
selectionList.addEventListener("click", (event) => {
    let result = "";
    let target = event.target;
    const compChoice = getComputerChoice();
    switch(target.id){
        case "rock":
            console.log("Selected rock");
            result = playRound("rock", compChoice);
            break;
        case "paper": 
            console.log("Selected paper");
            result = playRound("paper", compChoice);
            break;
        case "scissors":
            console.log("Selected scissors");
            result = playRound("scissors", compChoice);
            break;
        default:
            console.log("ERROR: incorrect selection");

    }
    diplayScores(target.id, compChoice, result);
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
        return "Tie";
    }
    // Next we enumerate all the different options which are not a tie
    else if ((humanChoice.toLowerCase() === "rock") && (computerChoice === "scissors"))
    {
        console.log("Human wins");
        humanScore++;
        return "Human wins";
    }
    else if ((humanChoice.toLowerCase() === "rock") && (computerChoice === "paper"))
    {
        console.log("Computer wins");
        computerScore++;
        return "Computer wins";
    }
    else if ((humanChoice.toLowerCase() === "paper") && (computerChoice === "scissors"))
    {
        console.log("Computer wins");
        computerScore++;
        return "Computer wins";
    }
    else if ((humanChoice.toLowerCase() === "paper") && (computerChoice === "rock"))
    {
        console.log("Human wins");
        humanScore++;
        return "Human wins";
    }
    else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice === "rock"))
    {
        console.log("Computer wins");
        computerScore++;
        return "Computer wins";
    }
    else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice === "paper"))
    {
        console.log("Human wins");
        humanScore++;
        return "Human wins";
    }
    else
    {
        console.log("Incorrect input by human");
        return "ERROR: Incorrect input by human"
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