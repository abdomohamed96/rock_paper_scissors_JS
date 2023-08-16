
function getComputerChoice() {
   return  Math.floor(Math.random()*3); // 0 or 1 or 2
}
let count =0;
let computerWin=0;
let playerWin=0;
const body=document.querySelector("body");
const playNow=document.querySelector(".playnow");
const playerMessage=document.querySelector(".message");
playNow.addEventListener("click",play);
const buttons=document.querySelectorAll("#gameChoices");
const scoreBoard=document.createElement("div");
scoreBoard.classList.add("scoreBoard");
const playerScore=document.createElement("div");
const computerScore=document.createElement("div");
playerScore.textContent=`You\n ${playerWin}`;
computerScore.textContent=`Computer\n ${computerWin}`;
playerScore.style.fontSize="25px";
computerScore.style.fontSize="25px";
//playerScore.style.fonts

function play(e){
    playNow.textContent="you are in the game";
    playerMessage.textContent="choose any button ";
    scoreBoard.append(playerScore,computerScore);
//You have to call insertBefore on the parent element of the element you're inserting before. document.body is not the parent, it's far up in the DOM hierarchy.
    body.insertBefore(scoreBoard,playerMessage);
    buttons.forEach((button) =>button.addEventListener("click",playRound,{capture:false}));
}
function disable(){

    playNow.textContent="play again"
    buttons.forEach((button) =>button.removeEventListener("click",playRound,{capture:false}));
    playerMessage.textContent="choose any button ";
}



function playRound(e) {
    count++;
    e.stopPropagation();
    console.log(e.target.classList.value);
    
    playerSelection=e.target.classList.value.toString();
    
    computerSelection=getComputerChoice();
    let win;
    if (playerSelection=="rock") { //rock 0 
        if (computerSelection == 1) win =0; // lose 
        else if (computerSelection == 2) win =1; // win 
        else
        win =3;
    }
    if (playerSelection == "paper") { // paper 1
        if (computerSelection == 0) win = 1;
        else if (computerSelection == 2) win = 0;
        else 
        win =2;
    }
    if (playerSelection == "scissor") { // scissor 2
        if (computerSelection == 1) win =1;
        else  if (computerSelection == 0) win = 0;
        else
        win = 2;
    }
    let textToPrint;
    if(win==1)
         {textToPrint='you win:you chooses '+playerSelection+' and computer chooses '; playerWin++;}
    else if(win==0)
         {textToPrint='you lose:you chooses '+playerSelection+' and computer chooses '; computerWin++;}
    else
    {textToPrint='both choose the same :you chooses '+playerSelection+' and computer chooses ';}
    if(computerSelection==2)
        textToPrint+="scissor";
    else if(computerSelection==1)
        textToPrint+="paper";
    else textToPrint+="rock";
    
    playerMessage.textContent=textToPrint;
    if(count==5){
        disable();
        let whoWin=(computerWin<playerWin)?"You Win The Game ":(computerWin==playerWin)?"You Are Equal ":"You Lose The Game ";
        playerMessage.textContent=whoWin+"Click On Play again to start new game";
        count=0;
        playerWin=0;
        computerWin=0;

    }
    playerScore.textContent=`You ${playerWin}`;
    computerScore.textContent=`Computer ${computerWin}`;
}


