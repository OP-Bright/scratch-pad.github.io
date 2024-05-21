// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: none
O: The numbers 1-100 to the console, unless it's a multiple of 3, 
in which is prints Fizz, or a multiple of 5, in which it prints buzz,
if it's a multiple of both, then print FizzBuzz
C: none
E: none
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    for (var i = 1; i < 101; i++) {
        if (Number.isInteger(i / 3) === true) {
            if (Number.isInteger(i / 5) === true) {
                console.log("FizzBuzz");
            } else {
                console.log("Fizz");
            }
        } else if (Number.isInteger(i / 5) === true) {
            console.log("Buzz");
        } else {
            console.log(i);
        }

        // YOUR CODE GOES ABOVE HERE //
    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}