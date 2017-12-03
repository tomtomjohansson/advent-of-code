const day1 = require( './1' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString()

console.log('Assignment 1:1: ', day1( input, 'next' ) )
console.log('Assignment 1:2: ', day1( input, 'jump' ) )