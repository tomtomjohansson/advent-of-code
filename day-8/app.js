const day8 = require('./8')
const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt').toString().split(/\n/)

console.log(day8(input))
