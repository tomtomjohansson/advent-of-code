const day5 = (input, f) => {
  let arr = input.split(/\n/).map(Number)
  let i = 0
  let count = 0
  while (i < arr.length) {
    const val = arr[i]
    arr[i] += f(arr[i])
    i += val
    count++
  }
  return count
}

const superFunc = () => 1

const changeValue = (val) => val > 2 ? -1 : 1

module.exports = {
  day5,
  superFunc,
  changeValue
}