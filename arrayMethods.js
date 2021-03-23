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

  module.exports = {
    mappedFunction
  };
  