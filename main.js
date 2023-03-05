var player1 = new Player ('Player1', '\u{1F92A}');
var player2 = new Player ('Player2', '\u{1F977}');  
var game = new Game (player1, player2); 

// QuerySelectors
var boardGame = document.querySelectorAll('.all-box'),
    currentPlayer = document.querySelector('.js-whose-turn');

// Event Listener
    boardGame.forEach(function(div) {
      div.addEventListener('click', function(event) {
        var source = event.target || event.srcElement;
        if(source.innerText === "" && source.classList.contains('box')) {
          updatePlayer()
          updateToken(source)
        }
      })
    })


// Event handlers
function updatePlayer() {
  game.currentTurn()
  currentPlayer.innerHTML = `It's ${game.turn.id} turn!`;
}

function updateToken(boxToken) {
  game.turn.token
  boxToken.innerHTML = `${game.turn.token}`
}



 
