// ------- HIGHER ORDER FUNCTIONS -------
// 1. functions that take functions as params
// 2. functions that return functions

const mappedFunction = (array, callback) => {
    let newArr= [];
    for ( let i = 0; i < array.length; i++){
      newArr = [ ...newArr, array[i] + 1] 
    }
    
    return newArr;

  };

  const filterFunction = (array, callback) => {
    let tempArr = [];

    for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
        tempArr = [...tempArr, array[i]]
      }
    }
    return tempArr;
  };
  
  const findIndexFunction = (array, callback) => {
    let tempArr = [];

    for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
        tempArr = [...tempArr, array[i]]
      }
    }
    return tempArr;
  };
  

  
  module.exports = {
    mappedFunction,
    filterFunction
  };
  