class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }
  
  increaseWins(){
    this.wins++;
  }
};

var player1 = new Player ('Player 1', 'ONE');
var player2 = new Player ('Player 2', 'TWO');   
   
