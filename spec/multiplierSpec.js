var m = require('../src/multiplier')

describe('Multiplier', function() {

  beforeEach(function() {
    multiplier = new m.Multiplier();
  });

  describe('formMultiplicationTable', function() {

    it('creates a 2d array of each number multiplied', function() {
      expect(multiplier.formMultiplicationTable([2])).toEqual([[4]]);
      expect(multiplier.formMultiplicationTable([2,3,5])).toEqual([[4,6,10],[6,9,15],[10,15,25]]);
    });
  });
});
