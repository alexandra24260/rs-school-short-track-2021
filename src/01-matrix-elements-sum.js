/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let i;
  let j;
  let output = 0;
  let niddle = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && i < matrix.length - 1) {
        niddle += matrix[i + 1][j];
      }
      output += matrix[i][j];
    }
  }
  return output - niddle;
}

module.exports = getMatrixElementsSum;
