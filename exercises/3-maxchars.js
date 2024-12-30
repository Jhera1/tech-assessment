// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   const charMap = {}
   let maxChar = ''
   let max = 0
   for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
   }
   for (let key in charMap) {
    if (charMap[key] > max) {
        max = charMap[key]
        maxChar = key
    }
   }
   return maxChar
}
    console.log(maxChar("abcccccccd"))

    //////OR//////

    function maxChar(str) {
        return [...str].reduce((max, char, _, arr) => {
            const freq = arr.filter(c => c === char).length;
            return freq > max[1] ? [char, freq] : max;
        }, ['', 0])[0];
    }
    
    console.log(maxChar("abcccccccd")); // Output: "c"
    