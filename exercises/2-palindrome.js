// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. 

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

// function palindrome(str) {

// }

const palindrome = str => str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
console.log(palindrome("kayak"))
console.log(palindrome("Suppus"))
console.log(palindrome("Somewhere in Time"))