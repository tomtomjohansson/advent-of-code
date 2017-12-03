const {day2, divide, subtract} = require( './2' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString()

console.log('Assignment 2:1: ', day2( input, subtract) )
console.log('Assignment 2:2: ', day2( input, divide) )
