// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0 

function vowels(str) {
   matches = str.match(/[aeiou]/gi)
   console.log(matches)
   return matches ? matches.length : 0
}

console.log(vowels('Coding Money'));
