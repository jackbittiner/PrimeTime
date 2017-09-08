var tG = require('../src/tableGenerator')

describe('TableGenerator', function() {

  beforeEach(function() {
    tableGenerator = new tG.TableGenerator();
  });

  describe('formatTable', function() {

    var array2D = [[null, 2, 3, 5],
                     [2, 4, 6, 10],
                     [3, 6, 9, 15],
                     [5, 10, 15, 25] ];

    var expectedResult = [ '|   |  2|  3|  5|',
                           '|  2|  4|  6| 10|',
                           '|  3|  6|  9| 15|',
                           '|  5| 10| 15| 25|', ];

    it('inputs a 2 dimensional array into table form', function() {
      expect(tableGenerator.generateTable(array2D)).toEqual(expectedResult);
    });
  });
});
