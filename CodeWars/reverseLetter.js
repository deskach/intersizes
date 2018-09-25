function reverseLetter(str) {
  return str.replace(/[\W\d_]/gi, '').split('').reverse().join('');
}

module.exports = {reverseLetter}
