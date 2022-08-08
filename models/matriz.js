export default class Matriz {
  constructor(rows, columns) {
    this.columns = columns;
    this.rows = rows;
    this.matriz = [];
  }

  crearMatriz() {
    for (let i = 0; i < this.rows; i++) {
      this.matriz[i] = new Array(this.columns);
    }
    return this.matriz;
  }

  llenarMatriz() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matriz[i][j] = ".";
      }
    }
    return this.matriz;
  }

  imprimirMatriz() {
    for (let i = 0; i < this.matriz.length; i++) {
      let line = "";
      for (let j = 0; j < this.matriz[i].length; j++) {
        line += this.matriz[i][j] + " ";
      }
      console.log(line);
    }
    return "";
  }

  fillLiveCells(x, y) {
    if(this.matriz[x][y] == '*'){
      return false
    }else{
      this.matriz[x][y] = "*";
      return true
    }
  }

  siguienteGeneracion() {
    for (let y = 1; y < this.columns-1; y++) {
      for (let x = 1; x < this.rows-1; x++) {
        let num = this.countNeighbours(x, y);
        this.viveOmuere(num,x,y)
      }
    }
    return this.matriz;
  }

  viveOmuere(num,x,y){
    (this.matriz[x][y] == ".") ? this.revive(num,x,y) : this.kill(num,x,y);
  }

  revive(num,x,y){
    if (num == 3) this.matriz[x][y] = "*";
  }

  kill(num,x,y) {
    (num == 3  || num == 2) ? this.matriz[x][y] = "*" : this.matriz[x][y] = ".";
  }

  countNeighbours(x, y) {
    let neighbours = 0;
    neighbours += this.contarLados(x - 1, y - 1);
    neighbours += this.contarMedios(x, y);
    neighbours += this.contarLados(x - 1, y + 1);

    return neighbours;
  }

  contarLados(x, y) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.matriz[x][y] == "*") {
        count++;
      }
      x++;
    }
    return count;
  }

  contarMedios(x, y) {
    let count = 0;
    if (this.matriz[x - 1][y] == "*") {
      count++;
    }

    if (this.matriz[x + 1][y] == "*") {
      count++;
    }
    return count;
  }
}
