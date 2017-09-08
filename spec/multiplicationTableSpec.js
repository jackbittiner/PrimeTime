var m = require('../src/multiplicationTable')

describe('MultiplicationTable', function() {

  beforeEach(function() {
    multiplier = new m.MultiplicationTable();
  });

  describe('multiplyNumbers', function() {

    it('creates a 2d array of each number multiplied', function() {
      expect(multiplier.multiplyNumbers([2])).toEqual([[4]]);
      expect(multiplier.multiplyNumbers([2,3,5])).toEqual([[4,6,10],[6,9,15],[10,15,25]]);
    });
  });

  describe('formMultiplicationTable', function() {

    it('creates a 2d array of all the multipliers and their multiplied results', function() {
      expect(multiplier.formMultiplicationTable([2])).toEqual([[null,2],[2,4]]);
      expect(multiplier.formMultiplicationTable([2,3,5])).toEqual([[null,2,3,5],[2,4,6,10],[3,6,9,15],[5,10,15,25]]);
    });
  });
});
