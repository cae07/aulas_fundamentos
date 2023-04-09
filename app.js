function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os valores precisam ser numéricos');
  }
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

module.exports = {
  sum,
  subtraction
};