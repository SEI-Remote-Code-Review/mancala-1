


/*-------------------------------- Constants --------------------------------*/

const chimes = new Audio('./audio/chimes.wav')

/*-------------------------------- Variables --------------------------------*/



let win, turn, winner, p1Manc, p2Manc, marbles, numMarbles, currentIndex
let board= []




/*------------------------ Cached Element References ------------------------*/
const holeElements = document.querySelectorAll('.hole')
const p1MancEl = document.querySelector('#hole6')
const p2MancEl = document.querySelector('#hole13')
const howToBtn = document.getElementById("howToButton")
const resetBtn = document.getElementById('reset')

const color1= document.getElementById('player-1')
const color2 = document.getElementById('player-2')


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
resetBtn.addEventListener('click', init) //can happen anytime, not just when game complete


/*-------------------------------- Functions --------------------------------*/
init();



function init() {
  board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
  
  p1Manc=board[6]
  p2Manc=board[13]
  turn = 1
  winner = null 
  render()
  
}

function render(){ 
  holeElements.forEach(function(hole) {
    let holeElementIndex = hole.id.slice(4)
    hole.textContent = board[holeElementIndex]
  })
  if (turn===1) {
    color1.style.color="#6D2C31"
  }else {
    color1.style.color="black"
  }
  if (turn===2) {
    color2.style.color="#FFB94F"
  }else {
    color2.style.color="black"
  }
}

function handleClick(evt){ //distributes marbles around the board from player1 perspective
  let first = parseInt(evt.target.id.slice(4))
  //setting up first play conditions to limit players to certain indexes
  if (board[first]===0){
    return 
  }
  if (first === 6 || first === 13){
    //console.log('nononono')
    return
  }
  if (first > 5 && turn === 1) {
    //console.log('nono')
    return
  }
  if (first < 6 && turn === 2) {
    //console.log('no')
    return
  }
  
  marbles = board[first]
  board[first] = 0
  for (let i = 1; i <= marbles; i++) {
    chimes.play()
    numMarbles = board[first+i]
    //console.log(marbles)
    if (turn === 1 && first+i === 13) {
      first++
    }
    if (turn === 2 && first+i === 6){
      first++
    }
    if ((first + i) > 13) {
      first = 0 - i 
      }
    board[first+i]++
      //console.log(numMarbles)
    currentIndex = first+i //what each index a marble is  distributed to
    //console.log(currentIndex)
  }
  if (numMarbles===0){
    absorb();
  }
  
  goAgain();
  
  switchTurn();
  render();
  getWinner();
}

function switchTurn(){
  if (turn === 1){
    turn++
  }else {
    turn--
  }
  
}


  
  

    
  


function goAgain(){
  if (turn === 1 && currentIndex === 6) {
    turn++
  }
  if (turn === 2 && currentIndex === 13){
    turn++
  }
}

//i would love to find a more concise code for this...
//if it's player 1 turn and currentIndex(last marble) lands on an empty hole in 0-5 AND the opposite hole is full, combine those numbers into hole 6.
function absorb(){
  if (turn === 1) {
    if (currentIndex === 0 && board[12] > 0) {
      board[6] += (board[12]+board[0])
      board[12] = 0
      board[0] = 0
    }else if (currentIndex === 1 && board[11] > 0) {
      board[6] += (board[11]+board[1])
      board[11] = 0
      board[1] = 0
    }else if (currentIndex === 2 && board[10] > 0) {
      board[6] += (board[10]+board[2])
      board[10] = 0
      board[2] = 0
    }else if (currentIndex === 3 && board[9] > 0) {
      board[6] += (board[9]+board[3])
      board[9] = 0
      board[3] = 0
    }else if (currentIndex === 4 && board[8] > 0) {
      board[6] += (board[8]+board[4])
      board[8] = 0
      board[4] = 0
    }else if (currentIndex === 5 && board[7] > 0) {
      board[6] += (board[7]+board[5])
      board[7] = 0
      board[5] = 0
    }
  }
//if it's player 2 turn and currentIndex(last marble) lands on an empty hole in 7-12 AND the opposite hole is full, combine those numbers into hole 13.
  if (turn === 2) {
    if (currentIndex === 12 && board[0] > 0) {
      board[13] += (board[12]+board[0])
      board[12] = 0
      board[0] = 0
    }else if (currentIndex === 11 && board[1] > 0) {
      board[13] += (board[11]+board[1])
      board[11] = 0
      board[1] = 0
    }else if (currentIndex === 10 && board[2] > 0) {
      board[13] += (board[10]+board[2])
      board[10] = 0
      board[2] = 0
    }else if (currentIndex === 9 && board[3] > 0) {
      board[13] += (board[9]+board[3])
      board[9] = 0
      board[3] = 0
    }else if (currentIndex === 8 && board[4] > 0) {
      board[13] += (board[8]+board[4])
      board[8] = 0
      board[4] = 0
    }else if (currentIndex === 7 && board[5] > 0) {
      board[13] += (board[7]+board[5])
      board[7] = 0
      board[5] = 0
    }
  }
}

// function checkIfOver(){
//   if (player1Over() || player2Over()){
//     getWinner();
//   }
// }

// function player1Over(){
//   for (let i = 0; i < board.length; i++){
//     if (board[i] === 0 && board[i] < 6){
//     return false
//     }
//   }
//   return true;
// }

// function player2Over(){
//   for (let i = 0; i < board.length; i++){
//     if (board[i] === 7 && board[i] < 13){
//     return false
//     }
//   }
//   return true;
// }






function getWinner(){
  let rowP1 = board.slice(0,6).reduce(function(a, b){
    return a + b
  }, 0)
    
  
    let rowP2 = board.slice(7,13).reduce(function(a, b){
    return a + b
  }, 0)



  if (rowP1 === 0 || rowP2 === 0) {
    rowP1 += board[6]
    rowP2 += board[13]
    
    board.splice(0,5,0,0,0,0,0,0)
    board.splice(7,5,0,0,0,0,0,0)
    board[6] = rowP1
    board[13] = rowP2
    render()

    winner = board[6] > board[13] ? 1 : 2
    if (board[6] === board[13]) {
      winner = 0
      alert(`How in the world did you tie?`)
      return
    }
    
    alert(`How exciting! The winner is Player ${winner}!`)
  }}





//function handleHover(evt){ //to show marble amount in hole



function getList(){
console.log("Instructions") //this works
}

