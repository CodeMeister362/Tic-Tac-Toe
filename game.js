var player1 = new Player ({id:'player 1', token:'ONE'}),
    player2 = new Player ({id:'player 2', token:'TWO'});
    
    //keep track of data of board
var row1 = [],
    row2 = [],
    row3 = [],
    column1 = [],
    column2 = [],
    column3 = [];

    //whose turn?
var currentTurn = player1 || player2




class Game{
  constructor(player) {
    this.turn = true;
    this.player = player
  }
  win() {
    if() {

    }
  }
  draw() {
    if() {

    }
  }
  reset() {
    if() {

    }
  }
}