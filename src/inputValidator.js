function InputValidator() {
}

InputValidator.prototype.validateInput = function(input) {
  var userInput = parseInt(input)
    if (isNaN(userInput) || userInput < 1) {
      throw new Error ('Please input a whole number above 1.');
    }
}

module.exports.InputValidator = InputValidator;