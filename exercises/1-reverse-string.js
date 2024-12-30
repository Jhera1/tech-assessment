// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

function reverse(str) {
    return str.split('').reverse().join('')
}
console.log(reverse('Somewhere in Time'))