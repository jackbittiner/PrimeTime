var iV = require('../src/inputValidator')

describe('InputValidator', function() {

  beforeEach(function() {
    inputValidator = new iV.InputValidator();
  });

  describe('validateInput', function() {

    it('throws an error if the input is not a number', function() {
      expect(function(){ inputValidator.validateInput('a') } ).toThrow(new Error("Please input a whole number above 1."))
    });

    it('throws an error if the input is less than 1', function() {
      expect(function(){ inputValidator.validateInput(-10) } ).toThrow(new Error("Please input a whole number above 1."))
    });
  });
});
