var readline = require('readline');
var mT = require('./src/multiplicationTable')
var pG = require('./src/primeGenerator')
var tG = require('./src/tableGenerator')
var iV = require('./src/inputValidator')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var processUserInput = function() {
  rl.question('How many primes would you like to multiply? ', (userInput) => {
    var inputValidator = new iV.InputValidator()
    if(inputValidator.validateInput(userInput)) {
      rl.close();
      var numberOfPrimes = parseInt(userInput);
      var multiplicationTable = new mT.MultiplicationTable();
      var primeGenerator = new pG.PrimeGenerator();
      var tableGenerator = new tG.TableGenerator();
      var primes = primeGenerator.getPrimes(numberOfPrimes);
      var tableData = multiplicationTable.formMultiplicationTable(primes);
      var finalResults = tableGenerator.generateTable(tableData);
      console.log(finalResults)
    } else {
      console.log('Please input a whole number that is at least 1')
      processUserInput();
    }
  });
}

processUserInput();
