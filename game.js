class Game {
  constructor(player1, player2) {
    this.turn = player1;
    this.winArray = [player1.positionArray, player2.positionArray]
    this.winner = undefined;
  }
  currentTurn() {
    if(this.turn === player1) {
      return this.turn = player2
    } 
    if(this.turn === player2) {
      return this.turn = player1
    }
  }

  win() {
    for(var i = 0; i < this.winArray.length; i++) {
      
    }
  }
}


