class Game {
  constructor(player1, player2) {
    this.turn = player1;
    this.player1 = player1;
    this.player2 = player2;
    this.winArrays = [ 
      [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
    ];
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

  // win() {
  // }
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


