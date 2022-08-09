
import { readInput, Home} from "./helpers/inquirer.js";
import  Matrix  from "./models/matrix.js";

const main = async()=>{
  Home()
  const rows = await readInput('Ingresa las filas: ');
  
  const columns = await readInput('Ingresa las columnas: ');

  let matriz = new Matrix(rows, columns);
  matriz.createMatrix();
  matriz.fillMatrix();

  const cellsVivas = await readInput('Cuántas células vivas deseas tener: ');
  let ok;
  for(let i= 0; i<cellsVivas; i++){
    do {
      let x = Math.floor((Math.random() * ((rows-2) - 1 + 1)) + 1);
      let y= Math.floor((Math.random() * ((columns-2) - 1 + 1)) + 1);
      ok = matriz.fillLiveCells(x,y);
    } while (ok == false);
  }

  console.log("1ra Generacion".blue)
  matriz.printMatrix();


  console.log("________________");
  
  console.log("2da Generacion".blue)
  matriz.printMatrix(matriz.nextGeneration());
}

main();



