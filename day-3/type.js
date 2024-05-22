// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/*
I: a value of unknown type
O: true or false, true if the value if an array, false if it is not.
C: none
E: none
*/

function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value) === true) {
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */

/*
I: a value of unknown type
O: true or false, true if the value if an object, false if it is not (or is the Date object)
C: none
E: none
*/

function isObject(value) {
    // YOUR CODE BELOW HERE //
    console.log (value)
    
    if (typeof value === "object") {
       if (value === null || value === undefined || value == Date() || Array.isArray(value) === true) {
            console.log ("false")    
            return false
        } else {
            console.log ("true")
            return true
        }
    } else {
        console.log ("false")
        return false
    }
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/*
I: a value of unknown type
O: true or false, true if the value if an array or object, false if it is not.
C: none
E: none
*/

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value === "object") {
        if (value === null || value === undefined || value == Date()) {
             console.log ("false")    
             return false
         } else {
             console.log ("true")
             return true
         }
     } else {
         console.log ("false")
         return false
     }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 

/*
I: a value of unknown type
O: a string, denoting the type of the value. 
C: Be significantly more specific than typeof
E: none
*/

function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    const test = typeof value;
    if (test === "object") {
            if (value === null) {   
                 return "null"
             } else if (value === undefined) {
                return "undefined"
             } else if (value == Date()) {
                return "date"
             } else if (Array.isArray(value)) {
                return "array"
             } else {
                 return "object"
             }
         } else {
             return test
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}