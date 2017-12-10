module.exports = (input) => {
  const obj = input.reduce((acc, i) => {
    acc[splitString(i)[0]] = 0
    return acc
  }, {})
  let highestEver = 0
  input.forEach(line => {
    let split = splitString(line)
    let calc = split.slice(-3)
    if (eval(buildEval(obj, calc))) {
      if (split[1] === 'inc') {
        obj[split[0]] += Number(split[2])
      } else {
        obj[split[0]] -= Number(split[2])
      }
      highestEver = higher(obj[split[0]], highestEver)
    }
  })
  const highestEnd  = obj[sortObject(obj)[0]]
  return { highestEnd, highestEver }
}

const splitString = (string) => string.split(/\s/)
const sortObject = (obj) => Object.keys(obj).sort((a,b) => obj[b] - obj[a])
const higher = (a, b) =>  a > b ? a : b
const buildEval = (obj, parts) => `${obj[parts[0]]} ${parts[1]} ${parts[2]}`