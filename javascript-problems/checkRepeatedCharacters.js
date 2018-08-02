function checkRepeatedCharacters(str) {
  if(str.length === 0 || str === undefined || str === null) return 'Nothing to check!';

  return /(.).*\1/.test(str);
}

console.log(checkRepeatedCharacters('hello'));
console.log(checkRepeatedCharacters('hai'));
// console.log(checkRepeatedCharacters(''));