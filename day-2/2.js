const day2 = (input, calc) => {
  return input
    .split(/\n/)
    .map(line => line.split(/\s/))
    .reduce((acc, item) => acc + calc(item), 0)
}

const divide = item => {
  let quotient = 0
  const sortedArr = [...item].sort((a, b) => b - a)
  sortedArr.find((number, index) => {
    quotient = getQuotient(number, sortedArr, index)
    return quotient
  })
  return quotient
}

const subtract = item => {
  return Math.max(...item) - Math.min(...item)
}

const getQuotient = (number, arr, index) => {
  const divideBy = arr.slice(index + 1).find(i => number % i === 0)
  return divideBy ? number / divideBy : null
}

module.exports = {
  divide,
  subtract,
  day2
}
