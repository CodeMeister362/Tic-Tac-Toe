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
      if(this.winArray[0].includes('1' && '2' && '3') || 
      this.winArray[0].includes('4' && '5' && '6') || 
      this.winArray[0].includes('7' && '8' && '9') || 
      this.winArray[0].includes('1' && '4' && '7') || 
      this.winArray[0].includes('2' && '5' && '8') || 
      this.winArray[0].includes('3' && '6' && '9') || 
      this.winArray[0].includes('1' && '5' && '9') ||
      this.winArray[0].includes('3' && '5' && '7')) {
        return this.winner = player1
      }
    }
    for(var i = 0; i < this.winArray[1].length; i++) {
      if(this.winArray[1].includes('1' && '2' && '3') || 
      this.winArray[1].includes('4' && '5' && '6') || 
      this.winArray[1].includes('7' && '8' && '9') || 
      this.winArray[1].includes('1' && '4' && '7') || 
      this.winArray[1].includes('2' && '5' && '8') || 
      this.winArray[1].includes('3' && '6' && '9') || 
      this.winArray[1].includes('1' && '5' && '9') ||
      this.winArray[1].includes('3' && '5' && '7')) {
        return this.winner = player2
      }
    }
    if(this.winner === player1) {
     return player1.wins++
    } else if(this.winner === player2) {
     return player2.wins++
    }
  }
}


