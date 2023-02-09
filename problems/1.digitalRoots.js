const EXERCISE =
  "https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript"

// somar todos os algarismos do número
// caso o número seja menor que 10, retorne o número
// caso nao seja, some os algarismos do número produzido novamente

const sampleInput = 942
function digitalRoot(n) {
  if (n < 10) return n

  const comma = ""
  const split = String(n)
    .split(comma)
    .map((e) => parseInt(e))

  const sum = split.reduce((acc, cur) => acc + cur)

  return digitalRoot(sum)
}

console.log(digitalRoot(sampleInput))
