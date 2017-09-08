function MultiplicationTable() {
}


MultiplicationTable.prototype.multiplyNumbers = function(arrayOfPrimes){
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

MultiplicationTable.prototype.formMultiplicationTable = function(arrayOfPrimes) {
  var multiplicationTable = this.multiplyNumbers(arrayOfPrimes);
  multiplicationTable.unshift(arrayOfPrimes);
  arrayOfPrimes.unshift(null)
  for(var i = 1; i < arrayOfPrimes.length; i++) {
    multiplicationTable[i].unshift(arrayOfPrimes[i]);
  }
  return multiplicationTable
}

module.exports.MultiplicationTable = MultiplicationTable;
