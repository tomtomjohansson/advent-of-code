const { compareWords, anagram, unique } = require('./4')
const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt').toString()

console.log(compareWords(input, unique))
console.log(compareWords(input, anagram))
