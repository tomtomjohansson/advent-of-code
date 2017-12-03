const getRingSize = input => {
  let pos1 = 0
  for (var endOfRing = 1; endOfRing < input; endOfRing += 8 * pos1) {
    ++pos1
  }
  return getDistanceFromZero(pos1, endOfRing, input)
}

const getDistanceFromZero = (pos1, endOfRing, input) => {
  const zeroSequence = [
    endOfRing - pos1,
    endOfRing - pos1 * 3,
    endOfRing - pos1 * 5,
    endOfRing - pos1 * 7
  ]
  let pos2 = 0
  zeroSequence.find(i => {
    pos2 = Math.abs(input - i)
    return Math.abs(input - i) <= pos1
  })
  return pos1 + pos2
}

module.exports = input => {
  return getRingSize(input)
}
