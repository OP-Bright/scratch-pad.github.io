// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/*
I: an array
O: the values of the array to the console
C: none
E: none
*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/*
I: an array
O: the values of the array to the console in reverse order
C: none
E: none
*/

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
I: an object
O: an array with each of the keys of an object
C: none
E: none
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];
  for (var key in object) {
    arr.push(key);
  }
  return arr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/*
I: an object
O: every key of the object printed to the console
C: none
E: none
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) {
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/*
I: an object
O: an array with every value in the object.
C: none
E: none
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var arr = [];
  for (var key in object) {
    arr.push(object[key]);
  }
  return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*
I: an object
O: every value of the object printed to the console.
C: none
E: none
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //

  for (var key in object) {
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*
I: an object
O: a number, which corresponds to the amounts of keys/values present in an object.
C: none
E: none
*/

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var keyValueCount = 0;
  for (var keys in object) {
    keyValueCount++;
  }
  return keyValueCount;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/*
I: an object
O: every value within the object in reverse order.
C: none
E: none
*/

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var arr = [];

  for (var key in object) {
    arr.push(key)
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    var key = arr[i]
    console.log(object[key])
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}