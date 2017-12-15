const day12 = require('./12')
const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt').toString().split(/\n/)

console.log(day12(input))
