function PrimeGenerator() {
}

PrimeGenerator.prototype.isPrime = function(number) {
 if (number % 2 == 0 || number % 3 == 0) return (number == 2 || number == 3);
 var root = Math.sqrt(number);
 for (var i = 5; i <= root; i += 6) {
  if (number % i == 0 || number % (i + 2) == 0) return false;
 }
 return true;
}

PrimeGenerator.prototype.getPrimes = function(number) {
  var primes = [];
  var i = 2;
  while(primes.length < number) {
    if (this.isPrime(i)) {
      primes.push(i)
    }
    i++;
  }
  return primes;
}

module.exports.PrimeGenerator = PrimeGenerator;
