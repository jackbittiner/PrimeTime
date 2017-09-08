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

PrimeGenerator.prototype.getPrimes = function(number) {
  var primes = [];
  var i = 2;
  while(primes.length < number) {
    if (this.isPrime(primes, i)) {
      primes.push(i)
    }
    i++;
  }
  return primes;
}


module.exports.PrimeGenerator = PrimeGenerator;
