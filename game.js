var player = new Player

class Game {
  constructor(player1, player2) {
    this.turn = player1;
    this.nextTurn = null
    this.winArray = [player1.positionArray, player2.positionArray]
    this.winner = null;
  }
  currentTurn() {
    if(this.turn === player1) {
       this.turn = player2
       this.nextTurn = player1
    } else if(this.turn === player2) {
       this.turn = player1
       this.nextTurn = player2
    }
  }


  winCondition() {
    for(var i = 0; i < this.winArray[0].length; i++) {
      if(this.winArray[0].includes('1' && '2' && '3')) {
        this.winner = player1
        player.increaseWins(this.winner)
      }
    }
  }
}


