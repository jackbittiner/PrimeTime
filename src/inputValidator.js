function InputValidator() {
}

InputValidator.prototype.validateInput = function(input) {
  var inputValid = true
  var userInput = parseInt(input)
    if (isNaN(userInput) || userInput < 1 || input % 1 !== 0) {
      inputValid = false;
    }
  return inputValid;
}

module.exports.InputValidator = InputValidator;
