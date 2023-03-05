var player1 = new Player ('Player1', 'ONE');
var player2 = new Player ('Player2', 'TWO');  
var game = new Game (player1, player2); 

var boardGame = document.querySelector('.all-box'),
    currentPlayer = document.querySelector('.js-whose-turn');


boardGame.addEventListener('click', updatePlayer);


function updatePlayer() {
 console.log(game.currentTurn())
 currentPlayer.innerHTML = `<div class="whose-turn js-whose-turn">It's ${game.turn.id} turn!</div>`;
}
 
