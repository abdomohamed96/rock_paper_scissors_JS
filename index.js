
function getComputerChoice() {
   return  Math.floor(Math.random()*3); // 0 or 1 or 2
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock") { //rock 0 
        if (computerSelection == 1) return 0; // lose 
        if (computerSelection == 2) return 1; // win 
        return 3;
    }
    if (playerSelection == "paper") { // paper 1
        if (computerSelection == 0) return 1;
        if (computerSelection == 2) return 0;
        return 2;
    }
    if (playerSelection == "scissor") { // scissor 
        if (computerSelection == 1) return 1;
        if (computerSelection == 0) return 0;
        return 2;
    }
}
function game(){
    let playAgain="yes";
    while(playAgain=="yes"){
        let computerCount=0;
        let playerCount=0;
        for(let i=0;i<5;i++){
            let playerSelection=prompt("choose rock or scissor or paper","rock")

            if(playerSelection==null||!playerSelection) break;

            playerSelection=playerSelection.toLowerCase();
            let computerSelection=getComputerChoice();
            let computerSelec=(computerSelection==0)?"rock":(computerSelection==1)?"paper":"scissor";
            let res=playRound(playerSelection, computerSelection);
            if(res==1){
                playerCount++;
                console.log('you win:you chooses '+playerSelection+' and computer chooses '+computerSelec+'\n');
            }
            else if(res==0){
                computerCount++;
                console.log('you lose:you chooses '+playerSelection+' and computer chooses '+computerSelec+'\n');
            }
            
            console.log(`Your score ${playerCount} vs Computer score  ${computerCount}\n`);
        }
        if(playerCount>computerCount)
        console.log(`You Win ,congrates score ${playerCount} vs ${computerCount}\n`);
        else if(playerCount<computerCount)
        console.log(`You Lose ,score ${playerCount} vs ${computerCount}\n`);
        else console.log(`You are of equal score ,score ${playerCount} vs ${computerCount}\n`);
        playAgain=prompt("Do you want to play again","yes");
        if( playAgain==null ||!playAgain) return;
        playAgain=playAgain.toLowerCase();
    }
   
}
game();
