/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = [];
  let i;
  const output = [];
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      index.push(i);
    } else {
      output.push(arr[i]);
    }
  }
  result = output.sort((a, b) => a - b);
  for (i = 0; i < index.length; i++) {
    result.splice(index[i], 0, -1);
  }
  return result;
}

module.exports = sortByHeight;
