const {top, unbalanced} = require('./7')
const {top} = require('./7')
const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt').toString()

console.log(top(input))
// console.log(unbalanced(input))