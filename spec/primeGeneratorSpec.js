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
});
