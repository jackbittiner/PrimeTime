var iV = require('../src/inputValidator')

describe('InputValidator', function() {

  beforeEach(function() {
    inputValidator = new iV.InputValidator();
  });

  describe('validateInput', function() {

    it('throws an error if the input is not a number', function() {
      expect(inputValidator.validateInput('this is not a number')).toEqual(false)
    });

    it('throws an error if the input is less than 1', function() {
      expect(inputValidator.validateInput(-10)).toEqual(false)
    });

    it('throws an error if the input is less than 1', function() {
      expect(inputValidator.validateInput(16.6)).toEqual(false)
    });

    it('returns true if the input is an integer above 1', function() {
      expect(inputValidator.validateInput('20')).toEqual(true)
      expect(inputValidator.validateInput(20)).toEqual(true)
    });
  });
});
