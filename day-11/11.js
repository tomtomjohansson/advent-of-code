module.exports = input => {
  const arr = input.split(',')
  const opposites = {
    n: 's',
    s: 'n',
    ne: 'sw',
    nw: 'se',
    sw: 'ne',
    se: 'nw'
  }
  const obj = arr.reduce(
    (acc, item) => {
      if (acc[opposites[item]].length) {
        acc[opposites[item]].pop()
      } else {
        acc[item].push(item)
      }
      return acc
    },
    { n: [], s: [], ne: [], nw: [], sw: [], se: [] }
  )
  const remaining = Object.keys(obj).filter(k => obj[k].length)
  return (
    obj[remaining[0]].length +
    Math.max(obj[remaining[1]].length, obj[remaining[2]].length)
  )
}
