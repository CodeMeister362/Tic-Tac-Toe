var player1 = new Player ('Player1', 'ONE');
var player2 = new Player ('Player2', 'TWO');  
var game = new Game (player1, player2); 

var boardGame = document.querySelector('.js-1'),
    currentPlayer = document.querySelector('.js-whose-turn');


boardGame.addEventListener('click', updatePlayer);



function updatePlayer() {
 console.log(game.currentTurn())
}
 
// function pageLoad() {
//   //board clears 
//   //states player 1 turn
// }