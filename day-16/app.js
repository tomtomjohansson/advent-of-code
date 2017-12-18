const day16 = require('./16')
const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt').toString().split(',')

console.log(day16(input))
