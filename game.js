class Game {
  constructor(player1, player2) {
    this.turn = player1;
    this.player1Array = [];
    this.player2Array = [];
    this.winArrays = [[],[],[]];
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

  // var win = '🤪,🤪,🤪' || ''
  // win() {
  //   for(var i = 0; i < this.winArrays.length; i++) {
  //     if(this.winArrays[i] === '🤪') {
  //       this.winner = player1
  //       player.increaseWins()
  //       console.log('PLAYER 1 WINS!! 🤪')
  //     }
  //   }
  // }
  

  // draw() {
  //   if() {

  //   }
  // }
  // reset() {
  //   if() {

  //   }
  // }
}


