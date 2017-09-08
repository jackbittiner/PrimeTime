function PrimeGenerator() {
}

PrimeGenerator.prototype.isPrime = function(primesBefore, number) {
  var isItPrime = true
  primesBefore.forEach(function(prime) {
    if(number % prime == 0) {
      isItPrime = false
      return
    }
  })
  return isItPrime;
}


module.exports.PrimeGenerator = PrimeGenerator;
