const buildObj = (input) => {
  const obj = input.split(/\n/)
    .reduce((acc, i) => {
      acc[i.split(' ')[0]] = {
        size: [...i.split(' ')[1]].slice(1, i.split(' ')[1].length - 1).join(''),
        arr: i.split(' ').slice(3).map(x => x.endsWith(',') ? x.slice(0, -1) : x)
      }
      return acc
    }, {})
  return obj
}

const top = (input) => {
  const flat = input.split(/\n/)
    .reduce((acc, i) => {
      acc = acc.concat(...i.split(' ').slice(3))
      return acc
    }, [])
    .map(i => i.endsWith(',') ? i.slice(0, -1) : i)
  const top = input.split(/\n/).find(i => {
    return !flat.includes(i.split(' ')[0])
  })
  return top
}

// const unbalanced = (input) => {
//   const obj = buildObj(input)
//   const start = top(input)
//   let i = 0
//   let testArr = [start.split(' ')[0]]
//   while(i < 2) {
//     let build = []
//     testArr.forEach(t => {
//       build.push(
//         obj[t].arr.reduce((acc, x) => {
//           let weight = Number(obj[x].size)
//           obj[x].arr.forEach(p => {
//             weight += Number(obj[p].size)
//           })
//           acc.weight.push(weight)
//           acc.arr.push(x)
//           return acc
//         }, {weight: [], arr: []})
//       )
//     })
//     testArr = build[0].arr
//     console.log(testArr)
//     i++
//   }
//   return 1
// }

module.exports = {
  // unbalanced,
  top
}