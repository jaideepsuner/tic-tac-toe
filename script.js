let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let isOver = false
let isTie = false
const gameOverMsg = document.querySelector('.game-over-msg')

function handleBoxClick(event) {
  const clickedBox = event.target
  const clickedBoxIndex = clickedBox.getAttribute('data-index')

  if (isOver) {
    return
  }

  gameBoard[clickedBoxIndex] = currentPlayer
  clickedBox.innerHTML = currentPlayer
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  console.log(gameBoard)
  checkWin()
}

const checkWin = () => {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    if (gameBoard[0] !== '') {
      gameOver()
    }
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    if (gameBoard[3] !== '') {
      gameOver()
    }
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    if (gameBoard[6] !== '') {
      gameOver()
    }
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    if (gameBoard[0] !== '') {
      gameOver()
    }
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    if (gameBoard[1] !== '') {
      gameOver()
    }
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    if (gameBoard[2] !== '') {
      gameOver()
    }
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    if (gameBoard[0] !== '') {
      gameOver()
    }
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    if (gameBoard[2] !== '') {
      gameOver()
    }
  } else if (gameBoard.every((box) => box !== '')) {
    isTie = true
    gameOver()
  }
}

const gameOver = () => {
  isOver = true
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  if ((isTie = true)) {
    gameOverMsg.innerHTML = `It's a Tie!`
  } else if ((isTie = false)) {
    gameOverMsg.innerHTML = `'${currentPlayer}' WON`
  }
}

const boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((box) => {
  box.addEventListener('click', handleBoxClick)
})
