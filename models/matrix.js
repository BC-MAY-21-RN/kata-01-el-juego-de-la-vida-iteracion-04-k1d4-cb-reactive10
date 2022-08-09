export default class Matrix {
  constructor(rows, columns) {
    this.columns = columns;
    this.rows = rows;
    this.matrix = [];
  }

  createMatrix() {
    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = new Array(this.columns);
    }
    return this.matrix;
  }

  fillMatrix() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matrix[i][j] = ".";
      }
    }
    return this.matrix;
  }

  printMatrix() {
    for (let i = 0; i < this.matrix.length; i++) {
      let line = "";
      for (let j = 0; j < this.matrix[i].length; j++) {
        line += this.matrix[i][j] + " ";
      }
      console.log(line);
    }
    return "";
  }

  fillLiveCells(x, y) {
    if(this.matrix[x][y] == '*'){
      return false;
    }else{
      this.matrix[x][y] = "*";
      return true;
    }
  }

  nextGeneration() {
    for (let y = 1; y < this.columns-1; y++) {
      for (let x = 1; x < this.rows-1; x++) {
        let neighbours = this.countNeighbours(x, y);
        this.rules(neighbours,x,y);
      }
    }
    return this.matrix;
  }

  rules(neighbours,x,y){
    (this.matrix[x][y] == ".") ? this.revive(neighbours,x,y) : this.liveOrDie(neighbours,x,y);
  }

  revive(neighbours,x,y){
    if (neighbours == 3) this.matrix[x][y] = "*";
  }

  liveOrDie(neighbours,x,y) {
    (neighbours == 3  || neighbours == 2) ? this.matrix[x][y] = "*" : this.matrix[x][y] = ".";
  }

  countNeighbours(x, y) {
    let neighbour = 0;
    neighbour += this.countSide(x - 1, y - 1);
    neighbour += this.countMiddle(x, y);
    neighbour += this.countSide(x - 1, y + 1);

    return neighbour;
  }

  countSide(x, y) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.matrix[x][y] == "*") {
        count++;
      }
      x++;
    }
    return count;
  }

  countMiddle(x, y) {
    let count = 0;
    if (this.matrix[x - 1][y] == "*") {
      count++;
    }

    if (this.matrix[x + 1][y] == "*") {
      count++;
    }
    return count;
  }
}
