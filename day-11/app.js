const day11 = require('./11')
const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt').toString()

console.log(day11(input))
