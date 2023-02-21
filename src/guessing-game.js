class GuessingGame {
  constructor(number) {
    this.number = number;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    let result = Math.round((this.min + this.max) / 2);
    this.result = result;
    if (result === this.number) {
      return this.result;
    }
    if (result > this.number) {
      this.lower();
    } 
    if (result < this.number){
      this.greater();
    }
    return this.result
  }

  lower() {
    this.max = this.result;
  }

  greater() {
    this.min = this.result;
  }
}

// let guessingGame = new GuessingGame(279);
// guessingGame.setRange(0,3445);
// guessingGame.guess()
// console.log(guessingGame)
module.exports = GuessingGame;
