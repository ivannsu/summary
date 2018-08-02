let notBinary = /[^01a]/;

// console.log(notBinary.test('110 01000 101 00 110')); // false
// console.log(notBinary.test('110 01000 102 00 110')); // true

console.log(notBinary.test('110')); // true
console.log(notBinary.test('a2')); // true