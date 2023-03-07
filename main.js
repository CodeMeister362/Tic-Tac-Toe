var player1 = new Player ('Player1', '🥷'), 
    player2 = new Player ('Player2', '\u{1F92A}'),  
    game = new Game (player1, player2); 

// QuerySelectors
var boardGame = document.querySelectorAll('.box'),
    endGame = document.querySelector('.all-box'),
    player1Score = document.querySelector('.player-1'),
    player2Score = document.querySelector('.player-2'),
    currentPlayer = document.querySelector('.js-whose-turn');

//EventListener  
boardGame.forEach(function(div) {
  div.addEventListener('click', function() {
    var source = event.target 
        updatePlayer()
        updateToken(source)
        addToArray(source)
        game.winCondition()
        gameWin() 
        playerScore()
        if(game.winner) {
          reset();
          return;
        } else if (source.innerText === "" && source.classList.contains('box')) {
      }
    })
  })


//EventHandlers
function updatePlayer() {
  game.currentTurn()
  currentPlayer.innerHTML = `It's ${game.turn.token} turn!`;
}

function updateToken(source) {
  game.turn.token
  source.innerHTML = `${game.nextTurn.token}`
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
    endGame.classList.add('game-over')
    return currentPlayer.innerHTML = `Player ${game.winner.token} WINS!!!`
  }
} 

function playerScore() {
  player1Score.innerHTML = `player ${player1.token} - ${player1.wins} wins`
  player2Score.innerHTML = `player ${player2.token} - ${player2.wins} wins`
}

function reset() {
  setTimeout(function(){
    for(var i = 0; i < boardGame.length; i++) {
      boardGame[i].innerHTML = "";
    }
    if(game.winner === player1) {
      currentPlayer.innerHTML = `Player ${player2.token} Turn!`
      game.winner = undefined
    } else {
      currentPlayer.innerHTML = `Player ${player1.token} Turn!`
      game.winner = undefined
    }
  }, 3000)
}


 
