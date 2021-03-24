const {
  filterFunction,
  mappedFunction,
  findIndexFunction,
  reduceFunction,
  everyFunction
  } = require('./arrayMethods');

//MAPPED FUNCTION TEST
describe('should use callback function in mappedFunction to get a new mapped array that multiplies number by 2', () => {
    it('should get old array and return modified array with the callback instructions ', () => {

      const numbers = [ 1, 2, 3, 4, 5]

      const actual = mappedFunction(numbers, (i) => i + 1)

      expect(actual).toEqual([2, 3, 4, 5, 6])

    });
});

//FILTER FUNCTION TEST
describe('should use callback filterFunction to get a new FILTERED array that returns only even numbers', () => {
  it('should get old array and return modified array with the callback instructions returning even numbers only', () => {

    function ifFunction(number){
      if (number % 2 === 0){
        return number
      }
    }

    const numbers = [ 1, 2, 3, 4, 5]

    const actual = filterFunction(numbers, (i) => ifFunction(i))

    expect(actual).toEqual([2, 4])

  });
});

//FIND INDEX FUNCTION TEST
describe('should use callback findIndexFunction to get INDEX array that returns the index number', () => {
  it('should return index', () => {

    function ifFunction(number){
      if (number > 4){
        return number[i]
      }
    }

    const numbers = [ 1, 2, 3, 4, 5]

    const actual = findIndexFunction(numbers, (i) => ifFunction(i))

    expect(actual).toEqual(4)

  });
});

//REDUCE FUNCTION TEST
describe('should use callback reduceFunction to get the accumulation of array', () => {
  it('should return the accumulation', () => {

    const array = [ 1, 2, 3, 4, 5]
    let initialValue = 2;
    const callback = (accumulator, item) => accumulator + item
  

    const actual = reduceFunction(array, callback, initialValue)

    expect(actual).toEqual(17)

  });
});

//EVERY FUNCTION TEST
describe('should use callback everyFunction and returns true', () => {
  it('should return false', () => {

    const array = [ 1, 2, 3, 4, 5]

    const callback = (item) => item === 1
  

    const actual = everyFunction(array, callback)

    expect(actual).toBeFalsy();

  });

  it('should return true', () => {

    const array = [ 1, 1, 1, 1]

    const callback = (item) => item === 1
  

    const actual = everyFunction(array, callback)

    expect(actual).toBeTruthy();

  });
});