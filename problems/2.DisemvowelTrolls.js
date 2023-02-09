const EXERCISE =
  "https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript"

const sampleInput = "This website is for losers LOL!"

// receber uma string
//retornar  a mesma string sem nenhuma bogal

function disemvowel(str) {
  const vowels = "aeiouAEIOU"

  const split = str.split('').filter(letter => !vowels.includes(letter)).join('')
  return split
}
console.log(disemvowel(sampleInput))
