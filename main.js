var boardGame = document.querySelector('.box'),
    currentPlayer = document.querySelector('.js-whose-turn');

// boardGame.addEventListener('click', updatePlayer)
window.addEventListener('load', console.log(new Game(player1.id)))


function updatePlayer(player) {
  if(currentPlayer.innerHTML === player1.id) {
    return 
  } else {
    return player1
  }
  currentPlayer.innerHTML = `
  <div class="whose-turn js-whose-turn">It's ${player} Turn</div>
  `
}
 
function pageLoad() {
  //board clears 
  //states player 1 turn
}