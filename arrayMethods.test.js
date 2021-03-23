const {
    firstFunction,
    mappedFunction
    } = require('./arrayMethods');
  
  describe('should use callback function in mappedFunction to get a new mapped array that multiplies number by 2', () => {
      it('should get old array and return modified array with the callback instructions ', () => {
  
        const numbers = [ 1, 2, 3, 4, 5]
  
        const actual = mappedFunction(numbers, (i) => i + 1)
  
        expect(actual).toEqual([2, 3, 4, 5, 6])
  
      });
  });
 