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
        if(source.classList.contains('filled') || endGame.classList.contains('filled')) {
          return
        }
        updatePlayer()
        updateToken(source)
        addToArray(source)
        game.winCondition()
        game.drawCondition()
        draw()
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
  source.classList.add('filled')
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
     currentPlayer.innerHTML = `Player ${game.winner.token} WINS!!!`
     endGame.classList.add('filled')
     return
    }
} 

function playerScore() {
  player1Score.innerHTML = `player ${player1.token} - ${player1.wins} wins`
  player2Score.innerHTML = `player ${player2.token} - ${player2.wins} wins`
}

function draw() {
  if(game.winner === 'draw') {
    return currentPlayer.innerHTML = `IT'S A DRAW!!!!`
  }
}

function reset() {
  setTimeout(function() {
    for(var i = 0; i < boardGame.length; i++) {
      boardGame[i].innerHTML = "";
      boardGame[i].classList.remove('filled')
    }
    if(game.winner === player1) {
      currentPlayer.innerHTML = `Player ${player2.token} Turn!`
      game.winner = undefined
    } else if(game.winner === 'draw') {
      currentPlayer.innerHTML = `Player ${game.turn.token} Turn!`
      game.winner = undefined
    } else if(game.winner === player2) {
      currentPlayer.innerHTML = `Player ${player1.token} Turn!`
      game.winner = undefined
    } else {
      currentPlayer.innerHTML = `Player ${player1.token} Turn!`
      game.winner = undefined
    }
    endGame.classList.remove('filled')
  }, 5000)
}




 
