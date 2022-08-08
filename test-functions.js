import Matrix from "./models/matrix.js";
//FUNCIÓN PARA PRUEBA
let matrix = new Matrix(8, 4);

const result = () => {
  matrix.createMatrix();
  matrix.fillMatrix();
  
  matrix.fillLiveCells(1,4);
  matrix.fillLiveCells(2,3);
  matrix.fillLiveCells(2,4);
  
  return matrix.nextGeneration();
};

//TEST CONTAR VECINOS DE LA CELULA EN LA POSICION (1,3)
const countTotalNeighbours = ()=>{
    return matrix.countNeighbours(1,3);
};

//TEST CONTAR LOS VECINOS DE LAS COLUMNAS DE LOS COSTADOS
//CÉLULA EN LA POSICION (2,3)
const countLateralColumnsNeighbours = ()=>{
    let count = 0;
     count += matrix.countSide(1,2); //Columna izquierda
     count += matrix.countSide(1,4); //Columna derecha

     return count;
};

//TEST CONTAR LOS VECINOS MEDIOS POSICIÓN (2,3)
const countCenterNeighbours = ()=>{
    return matrix.countMiddle(2,3);
};


//TEST REVIVIR CÉLULA MUERTA 
module.exports=  {
    result,
    countTotalNeighbours,
    countLateralColumnsNeighbours,
    countCenterNeighbours
};