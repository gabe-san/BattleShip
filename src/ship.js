export default class Ship {
  constructor(length, hits = 0) {
    this.length = length // [5, 4, 3, 3, 2];
    this.hits = hits;
    this.sunk = false;
  }

  hit() {
    this.hits++
    return this.hits;
  }

  isSunk() {
    if (this.hits !== 0 && this.length === this.hits) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}