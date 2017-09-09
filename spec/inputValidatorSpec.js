var iV = require('../src/inputValidator')

describe('InputValidator', function() {

  beforeEach(function() {
    inputValidator = new iV.InputValidator();
  });

  describe('validateInput', function() {

    it('returns false if input is NaN', function() {
      expect(inputValidator.validateInput('this is not a number')).toEqual(false)
    });

    it('returns false if number is less than 1', function() {
      expect(inputValidator.validateInput(-10)).toEqual(false)
    });

    it('returns false if number is not whole', function() {
      expect(inputValidator.validateInput(16.6)).toEqual(false)
    });

    it('returns true if the input is an integer above 1', function() {
      expect(inputValidator.validateInput('20')).toEqual(true)
      expect(inputValidator.validateInput(20)).toEqual(true)
    });
  });
});
