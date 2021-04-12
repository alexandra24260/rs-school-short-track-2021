/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const output = names;
  for (let i = 0; i < output.length; i++) {
    let count = 0;
    for (let j = i + 1; j < output.length; j++) {
      if (output[i] === output[j]) {
        count++;
        if (count !== 0) {
          output[j] = `${output[j]}(${count})`;
        }
      }
    }
  }
  return output;
}

module.exports = renameFiles;
