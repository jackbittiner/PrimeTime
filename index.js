var readline = require('readline');
var mT = require('./src/multiplicationTable')
var pG = require('./src/primeGenerator')
var tG = require('./src/tableGenerator')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How many primes would you like to multiply?', (userInput) => {
  rl.close();
  var numberOfPrimes = parseInt(userInput);
  var multiplicationTable = new mT.MultiplicationTable();
  var primeGenerator = new pG.PrimeGenerator();
  var tableGenerator = new tG.TableGenerator();
  var primes = primeGenerator.getPrimes(numberOfPrimes);
  var tableData = multiplicationTable.formMultiplicationTable(primes);
  var finalResults = tableGenerator.generateTable(tableData);
  console.log(finalResults)
});
