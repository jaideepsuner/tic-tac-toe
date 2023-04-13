let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let isOver = false

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
  }
  if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    if (gameBoard[3] !== '') {
      gameOver()
    }
  }
  if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    if (gameBoard[6] !== '') {
      gameOver()
    }
  }
  if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    if (gameBoard[0] !== '') {
      gameOver()
    }
  }
  if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    if (gameBoard[1] !== '') {
      gameOver()
    }
  }
  if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    if (gameBoard[2] !== '') {
      gameOver()
    }
  }
  if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    if (gameBoard[0] !== '') {
      gameOver()
    }
  }
  if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    if (gameBoard[2] !== '') {
      gameOver()
    }
  }
}

const gameOver = () => {
  isOver = true
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  console.log(`player ${currentPlayer} won`)
}

const boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((box) => {
  box.addEventListener('click', handleBoxClick)
})
