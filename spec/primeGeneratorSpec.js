var pG = require('../src/primeGenerator')

describe('PrimeGenerator', function() {

  beforeEach(function() {
    primeGenerator = new pG.PrimeGenerator();
  });

  describe('isPrime', function() {

    it('determines if a number is prime based on the primes that came before it', function() {
      expect(primeGenerator.isPrime([2,3,5,7,11], 12)).toEqual(false);
      expect(primeGenerator.isPrime([2,3,5,7,11], 13)).toEqual(true);
    });
  });

  describe('getPrimes', function() {

    it('returns the number of primes specified as the argument', function() {
      expect(primeGenerator.getPrimes(0)).toEqual([])
      expect(primeGenerator.getPrimes(1)).toEqual([2])
      expect(primeGenerator.getPrimes(10)).toEqual([2,3,5,7,11,13,17,19,23,29])
    })
  })
});
