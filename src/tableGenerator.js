function TableGenerator() {
}

TableGenerator.prototype.generateTable = function(array2D){
  var biggestNumber = array2D[array2D.length-1][array2D.length-1];
	var lengthOfCell = biggestNumber.toString().length;
	var formattedTable = [];
	for (var i = 0; i < array2D.length; i++){
		formattedTable[i] ='|';
		for (var j = 0; j < array2D.length; j++){
			if (array2D[i][j] === null){
				formattedTable[i] += ' '.repeat(lengthOfCell + 1) + '|';
			}
			else{
			numberOfSpaces = lengthOfCell - array2D[i][j].toString().length;
			formattedTable[i] += ' '.repeat(numberOfSpaces + 1) + array2D[i][j] + '|';
		    }
		}
	}
	return formattedTable;
}

module.exports.TableGenerator = TableGenerator;
