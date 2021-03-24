const {
    filterFunction,
    mappedFunction,
    findIndexFunction
    } = require('./arrayMethods');
  
  describe('should use callback function in mappedFunction to get a new mapped array that multiplies number by 2', () => {
      it('should get old array and return modified array with the callback instructions ', () => {
  
        const numbers = [ 1, 2, 3, 4, 5]
  
        const actual = mappedFunction(numbers, (i) => i + 1)
  
        expect(actual).toEqual([2, 3, 4, 5, 6])
  
      });
  });

  // filter function test
  describe('should use callback filterFunction to get a new filtered array that also only returns even numbers', () => {

    it('should get old array and return modified array with the callback instructions returning only even numbers', () => {

      function ifFunction(number){
        if (number % 2 === 0){
          return number
        }
      }

      const numbers = [1, 2, 3, 4, 5]

      const actual = filterFunction(numbers, (i) => ifFunction(i) )

      expect(actual).toEqual([2, 4])
    });
  });
 