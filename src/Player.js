import Gameboard from './gameBoard';

export default class Player {
  constructor(player) {
    this.gameboard = new Gameboard(player)
  }
}