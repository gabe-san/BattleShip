export default class Gameboard {
  constructor(player) {
    this.player = player;
    // 2d matrix based on given length of rule specific battleship board
    this.board = null;
    this.misses = [];
    this.ship = [];
  }

  initializeBoard() {
    // change sizeGrid accordingly; follow gamerule gridsize 10
    const sizeGrid = 10;
    const array = [];

    for (let i = 0; i < sizeGrid; i++) {
      array[i] = [];
      for (let j = 0; j < sizeGrid; j++) {
        array[i][j] = 'false';
        // place ship turn cells into true
      }
    }
    console.log(array);
    this.board = array;

  }

  receiveAttack(x, y) {
    // if this.board contains [x,y]
    // ship.hit()
    // this.misses.push() if attack misses
    // check if ship.isSunk(), return value
  }

  checkShip() {
    if (this.ship.length === 0) {
      return true
    }
    return false
  }
}