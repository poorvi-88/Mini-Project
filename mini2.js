let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreboard = document.querySelector("#user-score");
const compScoreboard = document.querySelector("#comp-score");

const genCompChoice = () =>
{
    const options = ["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () =>{
    msg.innerText ="Game was draw. Play again";
    msg.style.backgroundColor ="blue";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {  
        userscore++;
        userScoreboard.innerText = userscore;
        msg.innerText =`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
        }
    else{ 
        compscore++;
        compScoreboard.innerText = compscore;
        msg.innerText =`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playgame=(userChoice) =>
{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "scissors")
        {
            userWin = compChoice === "paper" ? true : false;
        }
        else{
            userWin = compChoice === "rock"? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => 
{
    choice.addEventListener("click", ()=>
    {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});