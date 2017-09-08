function Multiplier() {
}


Multiplier.prototype.formMultiplicationTable = function(arrayOfPrimes){
  var array2D = [];
  var size = arrayOfPrimes.length
  for(i = 0; i < size; i++){
    array2D[i] = [];
    for(j = 0; j < size; j++){
      prime = arrayOfPrimes[j]
      prime2 = arrayOfPrimes[i]
      array2D[i][j] = prime * prime2;
    }
  }
  return array2D;
}

module.exports.Multiplier = Multiplier;
