var player1 = new Player ('Player1', '🥷'),
    player2 = new Player ('Player2', '\u{1F92A}'),  
    game = new Game (player1, player2); 

// QuerySelectors
var boardGame = document.querySelectorAll('.all-box'),
    currentPlayer = document.querySelector('.js-whose-turn');

// Event Listener
    boardGame.forEach(function(div) {
      div.addEventListener('click', function() {
        var source = event.target 
        if(source.innerText === "" && source.classList.contains('box')) {
          updatePlayer()
          updateToken(source)
          addToArray(source)
          game.winCondition()
          gameWin() 
        }
      })
    })


// Event handlers
function updatePlayer() {
  game.currentTurn()
  currentPlayer.innerHTML = `It's ${game.turn.token} turn!`;
}

function updateToken(boxToken) {
  game.turn.token
  boxToken.innerHTML = `${game.nextTurn.token}`
}

function addToArray(source) {
  if(game.turn === player1) {
    game.winArray[1].push(source.id)
  }
  if(game.turn === player2) {
    game.winArray[0].push(source.id)
  }
}

function gameWin() {
  if(game.winner === player1 || game.winner === player2) {
    boardGame.removeEventListener('click', )
    return currentPlayer.innerHTML = `Player ${game.winner.token} WINS!!!`
  }
}



 
