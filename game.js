let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {

    const options = ["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random() * 3);
    return options[ranidx];
// rock ,paper / scissore
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText= "oops game Was draw! play Again"
    msg.style.backgroundColor="#081b31"

}


const showWinner = (userWin, userChoice, CompChoice) =>{
if(userWin){
    console.log("You Win")
    userScore++;
    userScorepara.innerText=userScore;;
    msg.innerText= `You Win! Your ${userChoice} beats ${CompChoice}`
    msg.style.backgroundColor ="green"
}
else{
    console.log("you Lose");
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText= `You lose! ${CompChoice} beats Your ${userChoice}`
    msg.style.backgroundColor ="red"


}
}



// play game  conditions 

const playgame = (userChoice) =>{
// console.log("user choice=",userChoice)
// generate comp choice
const CompChoice = genCompChoice () ;
// console.log("comp choice=",CompChoice)

if (userChoice === CompChoice){
    // draw the game
    drawGame();
}
else{
    let  userWin= true;
    if (userChoice === "rock"){
        // comp choice scissors,paper
      userWin = CompChoice === "paper" ? false : true;

    } else if(userChoice === "paper"){
        // rock scissor
       userWin= CompChoice === "scissors" ? false : true;

    }else {
        //rock paper
        userWin= CompChoice === "rock" ? false : true;
    };

    showWinner(userWin, userChoice, CompChoice);
}

}



// user choice
choices.forEach((choice) => {

    // console.log(choice);
    choice.addEventListener("click",() => {
    const userChoice =choice.getAttribute("id");
    //  console.log("choice was clicked",userChoice);
     playgame(userChoice);
    })
})