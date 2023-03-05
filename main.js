var player1 = new Player ('Player1', '\u{1F977}');
var player2 = new Player ('Player2', '\u{1F92A}');  
var game = new Game (player1, player2); 

// QuerySelectors
var boardGame = document.querySelectorAll('.all-box'),
    currentPlayer = document.querySelector('.js-whose-turn');

// Event Listener
    boardGame.forEach(function(div) {
      div.addEventListener('click', function() {
        var source = event.target 
        console.log(source.id)
        if(source.innerText === "" && source.classList.contains('box')) {
          updatePlayer()
          updateToken(source)
          addToArray(source)
        }
      })
    })
//each player has an array
//if its their turn push id into array
//run through arrays
//check for win's


// Event handlers
function updatePlayer() {
  game.currentTurn()
  currentPlayer.innerHTML = `It's ${game.turn.token} turn!`;
}

function updateToken(boxToken) {
  game.turn.token
  boxToken.innerHTML = `${game.turn.token}`
}

function addToArray(source) {
  if(game.turn === player1) {
    game.player1Array.push(source.id)
  }
  if(game.turn === player2) {
    game.player2Array.push(source.id)
  }
}



 
