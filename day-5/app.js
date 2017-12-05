const { day5, changeValue, superFunc } = require('./5')
const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt').toString()

console.log(day5(input, superFunc))
console.log(day5(input, changeValue))
