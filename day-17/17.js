module.exports = steps => {
  let arr = [0]
  return spinlock(arr, steps, 1, 0)
}

const spinlock = (arr, steps, number, current) => {
  let rounds = 2017
  if (number <= rounds) {
    const index = (current + steps) % arr.length + 1
    arr = buildArr(arr, index, number)
    return spinlock(arr, steps, ++number, index)
  } else {
    return arr[arr.indexOf(2017) + 1]
  }
}

const buildArr = (arr, index, number) => {
  if (index === 0) {
    arr.push(number)
  } else {
    arr.splice(index, 0, number)
  }
  return arr
}
