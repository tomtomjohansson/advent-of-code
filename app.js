const day1 = require( './1' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString()

console.log( day1( input, 'next' ) )
console.log( day1( input, 'jump' ) )