module.exports = input => {
  let arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p'
  ]
  const times = 1000000000 / input.length
  let once = oneDance(input, [...arr]).join('')
  let many = letsTwist(input, [...arr], times).join('')

  return { once, many }
}

const oneDance = (input, arr) => {
  input.forEach(i => {
    if (i[0] === 's') {
      arr = spin(arr, i)
    } else if (i[0] === 'x') {
      arr = swapIndex(arr, i.slice(1))
    } else {
      arr = swapNames(arr, i.slice(1))
    }
  })
  return arr
}

const letsTwist = (input, arr, times, tester = '') => {
  const original = 'abcdefghijklmnop'
  const origTimes = 1000000000 / input.length
  if (original === tester) {
    const timesToOrigin = origTimes - times
    times = origTimes % timesToOrigin + 1
    arr = original.split('')
  }
  if (times > 1) {
    arr = oneDance(input, arr)
    return letsTwist(input, arr, --times, arr.join(''))
  } else {
    return arr
  }
}

const spin = (arr, i) => {
  let number = Number(i.slice(1))
  let arr1 = arr.slice(arr.length - number)
  let arr2 = arr.slice(0, arr.length - number)
  let newArr = [...arr1, ...arr2]
  return newArr
}

const swapIndex = (arr, i) => {
  const swap1 = Number(i.split('/')[0])
  const swap2 = Number(i.split('/')[1])
  let keep = arr[swap1]
  arr[swap1] = arr[swap2]
  arr[swap2] = keep
  return arr
}

const swapNames = (arr, i) => {
  const swap1 = Number(arr.indexOf(i.split('/')[0]))
  const swap2 = Number(arr.indexOf(i.split('/')[1]))
  let keep = arr[swap1]
  arr[swap1] = arr[swap2]
  arr[swap2] = keep
  return arr
}
