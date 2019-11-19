/**
 * cut number of relativePath
 * // translate/2019-9-20-numeric-separators.md -> 20190920
 * @param str
 * @returns {number}
 */
function cutDate(str) {
  const re = /(\d{4})-(\d{1,2})-(\d{1,2})/;
  const arr = re.exec(str);

  if (arr == null) {
    return 0;
  }

  const [, year, month, day] = arr;
  return +(
    year +
    (month.length === 1 ? '0' + month : month) +
    (day.length === 1 ? '0' + day : day)
  );
}

module.exports.cutDate = cutDate;
