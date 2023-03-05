var player1 = new Player ('Player1', 'ONE');
var player2 = new Player ('Player2', 'TWO');  
var game = new Game (player1, player2); 

// QuerySelectors
var boardGame = document.querySelectorAll('.all-box'),
    currentPlayer = document.querySelector('.js-whose-turn');

// Event Listener
    boardGame.forEach(function(item) {
      item.addEventListener('click', function(event) {
        var source = event.target || event.srcElement;
        console.log(source)
        updatePlayer(event)
        updateToken(event)
      })
    })

// Event handlers
function updatePlayer() {
  console.log(game.currentTurn())
  currentPlayer.innerHTML = `
  <div class="whose-turn js-whose-turn">It's ${game.turn.id} turn!</div>
  `;
}

function updateToken(boxToken) {
  console.log(game.turn.token)
  boxToken.innerHTML = `<div class="box border-top js-2">${game.turn.token}</div>`
}
 
