console.log("Hello world")


/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let totalMarbles = 24;
let currentPlayer;
let board= []
let player1All= totalMarbles
let player2All= totalMarbles
let startIdx
let endIdx
let endRow
let numMarbles

/*------------------------ Cached Element References ------------------------*/
const p1BankEl = document.querySelector('#mancala-2')
const p2BankEl = document.querySelector('#mancala-1')
const howToBtn = document.querySelector('#how-to')
const resetBtn = document.querySelector('#reset')
const holeEls = document.querySelectorAll('.hole')


/*----------------------------- Event Listeners -----------------------------*/

holeEls.forEach(function(hole) {
  hole.addEventListener('click', handleClick)
})

holeEls.forEach(function(hole){
  hole.addEventListener('mouseover', handleHover)
})

p1BankEl.addEventListener('mouseover', handleHover)
p2BankEl.addEventListener('mouseover', handleHover)

howToBtn.addEventListener('click', getList) 
resetBtn.addEventListener('click', resetGame) //can happen anytime, not just when game complete

/*-------------------------------- Functions --------------------------------*/
//init();



function init() {
board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0] 

//should the board have two separate arrays that return objects??

turn = 1
winner = null 
  
}

function render(){
  holeEls.forEach(function(hole, idx)) {
    
  }
}

function handleClick(evt){
// for holeEls
}


function handleHover(evt){ //to show marble amount in hole

}

function getList(evt){
console.log("Instructions") //this works
}

function resetGame(evt){
  console.log("heard reset")
}