
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;


function changeTurn(){
    return (turn === 'X') ? '0' : 'X';
}

function checkWin(){
    const boxes = document.querySelectorAll('.boxtext');
    const win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    Array.from(win).forEach((e) => {
        if((boxes[e[0]].innerHTML == boxes[e[1]].innerHTML) && 
            (boxes[e[2]].innerHTML == boxes[e[1]].innerHTML) &&
            (boxes[e[0]].innerHTML != "")){
            isgameover = true;
            turn = 'X';
            document.getElementById('info').innerHTML = boxes[e[0]].innerHTML + " Wins";
            document.getElementById('image').style.width = "200px";
            document.getElementById('line').style.width = "20vw";
            document.getElementById('line').style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)` ;

        }
    })
}

const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let actualBox = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(actualBox.innerHTML === ''){
            actualBox.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementById('info').innerHTML = "Turn for " + turn;
            }
        }
    })
})

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', ()=> {
    isgameover = false;
    
    Array.from(boxes).forEach((ele) => {
    const box = ele.querySelector('.boxtext');
    box.innerHTML = '';
    document.getElementById('info').innerHTML = "Turn for X";
    document.getElementById('image').style.width = "0";
    document.getElementById('line').style.width = "0";
    })
})
