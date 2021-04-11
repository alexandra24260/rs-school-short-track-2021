/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let i;
  const output = [];
  const newN = n.toString().split('');
  for (i = 0; i < newN.length; i++) {
    const middle = newN.slice();
    middle.splice(i, 1);
    output.push(+middle.join(''));
  }
  return Math.max.apply(null, output);
}

module.exports = deleteDigit;
