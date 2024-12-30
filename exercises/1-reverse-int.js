// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverseInt(n) {
    reversed = parseInt(n.toString().split('').reverse().join(''))
    return reversed * Math.sign(n)
}
console.log(reverseInt(9001))

console.log(reverseInt(900 + 100))
console.log(reverseInt(900 + 500))
console.log(reverseInt(9 * -323))

