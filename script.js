let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']

function handleBoxClick(event) {
  const clickedBox = event.target
  const clickedBoxIndex = clickedBox.getAttribute('data-index')

  if (gameBoard[clickedBoxIndex] !== '') {
    return
  }

  gameBoard[clickedBoxIndex] = currentPlayer
  clickedBox.innerHTML = currentPlayer
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  console.log(gameBoard)
}

const boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((box) => {
  box.addEventListener('click', handleBoxClick)
})
