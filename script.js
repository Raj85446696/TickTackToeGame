let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector('#new-btn');
let msgCont = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

const resetgame=()=>{
    turnO = false
    enablebox();
    msgCont.classList.add("hide");
}

let turnO = true ; //Player-1 // Player-2 

// There are 8- wining Pattern.
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const enablebox =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disabledbox =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner=(winner)=>{
    msg.innerText = `Congratulation's , Winner is ${winner}`;
    msgCont.classList.remove('hide');
    disabledbox();
}
const checkWinner = ()=>{
    for (let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);

            }
        }
    }
}

newgamebtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);