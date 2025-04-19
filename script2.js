let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerX,playerO
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
    
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if (turnO) {//playerO
        box.innerText = "O";
        turnO = false;
        
       }
       else{ //playerX
        box.innerText="X";
        turnO = true;
       }
      //FIXing values in boxes
      box.disabled=true;
      checkWinner();
    });
    
});
//disable all other boxes on finding first winner
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";//empty all the boxes to restart the game
    }
}
const showWinner = (winner) =>{
   msg.innerText= `Congratulations!! , Winner is ${winner}` 
   msgContainer.classList.remove("hide");
   disableBoxes();
}
const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
               // console.log("Winner",pos1Val);
              showWinner(pos1Val);  
            }
            
        }
       /* console.log(pattern[0],pattern[1],pattern[2]);//individual index of an array
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);//positions=position1,position2,position3*/
        
    } 
        
    
}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
