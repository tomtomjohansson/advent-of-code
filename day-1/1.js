function compareDigits (a, b) {
  return a === b ? a : 0
}

function getCompareIndex (length, index) {
  return (index + length / 2) % length
}

module.exports = (digits, type) => {
  const sum = digits
    .split('')
    .map(d => parseInt(d))
    .reduce((acc, digit, i, arr) => {
      return (
        acc +
        compareDigits(
          digit,
          type === 'next'
            ? arr[i + 1] || arr[0]
            : arr[getCompareIndex(arr.length, i)]
        )
      )
    }, 0)
  return sum
}
