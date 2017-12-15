module.exports = input => {
  let rows = input.map(row => {
    let split = row.split(/\s/)
    split = split.map(s => s.replace(/,/g, ''))
    return split.slice(2)
  })

  const arrOfSets = []
  rows.forEach((r, i) => {
    const exist = arrOfSets.find(set => set.has(i))
    if (!exist) {
      let set = new Set()
      set.add(i)
      arrOfSets.push(buildCollection(rows[i], set, rows))
    }
  })

  return {
    connectionToZero: arrOfSets[0].size,
    numberOfCollections: arrOfSets.length
  }
}

const allIsNotDone = (arr, values) => {
  let check = arr.map(i => values.has(i))
  return check.length
}

const buildCollection = (arr, values, rows) => {
  let newSet = new Set()
  if (allIsNotDone(arr, values)) {
    arr.forEach(i => {
      values.add(Number(i))
      rows[Number(i)].forEach(s => {
        if (!values.has(Number(s))) {
          newSet.add(Number(s))
        }
      })
    })
    return buildCollection(Array.from(newSet), values, rows)
  } else {
    return values
  }
}
