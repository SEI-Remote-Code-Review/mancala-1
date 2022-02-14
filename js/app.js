


/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



let win, turn, winner, p1Manc, p2Manc, marbles, numMarbles, currentIndex
let board= []




/*------------------------ Cached Element References ------------------------*/
const holeElements = document.querySelectorAll('.hole')
const p1MancEl = document.querySelector('#p1Manc')
const p2MancEl = document.querySelector('#p2Manc')
const howToBtn = document.getElementById('how-to')
const resetBtn = document.getElementById('reset')



/*----------------------------- Event Listeners -----------------------------*/

holeElements.forEach(function(hole) {
  hole.addEventListener('click', handleClick)
})

// holeElements.forEach(function(hole){
//   hole.addEventListener('mouseover', handleHover)
// })

//p1MancEl.addEventListener('mouseover', handleHover)
//p2MancEl.addEventListener('mouseover', handleHover)

howToBtn.addEventListener('click', getList) 
resetBtn.addEventListener('click', resetGame) //can happen anytime, not just when game complete

/*-------------------------------- Functions --------------------------------*/
init();



function init() {
  board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
  
  p1Manc=board[6]
  p2Manc=board[13]
  turn = 1
  winner = null 
}

function render(){ 
  holeElements.forEach(function(hole) {
    let holeElementIndex = hole.id.slice(4)
    hole.textContent = board[holeElementIndex]
    
  })
}

function handleClick(evt){ //distributes marbles around the board from player1 perspective
  let first = parseInt(evt.target.id.slice(4))
  //setting up first play conditions to limit player 1 to index 0-5
  if (first === 6 || first === 13){
    return
  }
  if (first > 5 && turn === 1) {
    return
  }
  if (first < 6 && turn === 2) {
    return
  }
  
  marbles = board[first]
  board[first] = 0
  for (let i = 1; i <= marbles; i++) {
    if ((first + i) > 13) {
      first = 0 - i 
      }
    board[first+i]++;
  }
  changeTurn();
  render();
}











//function handleHover(evt){ //to show marble amount in hole

//}

function getList(evt){
console.log("Instructions") //this works
}

function resetGame(evt){
  console.log("heard reset")
}