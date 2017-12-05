const compareWords = (input, f) => {
  return input.split(/\n/).filter(x => {
    return f(x) === x.split(/\s/).length
  }).length
}

const anagram = words => {
  return [
    ...new Set(
      words.split(/\s/).map(y => {
        return [...y].sort().join('')
      })
    )
  ].length
}

const unique = words => {
  return [...new Set(words.split(/\s/))].length
}

module.exports = {
  compareWords,
  anagram,
  unique
}
