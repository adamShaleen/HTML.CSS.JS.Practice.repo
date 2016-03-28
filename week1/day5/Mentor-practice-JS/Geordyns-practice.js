// create an array called 'myArray' that contains the numbers 1 - 5

   // var myArray = [1, 2, 3, 4, 5];

// create an object called 'myObject' that contains three properties

   // var myObject = {
   //     prop1: 'value1',
   //     prop2: 'value2',
   //     prop3: 'value3'
   // };

// write a 'print' function that prints out input

   // function print(input) {
   //     console.log(input);
   // };

// print the second element of 'myArray' using the 'print' function

   // print(myArray[1]);

// print the second property of 'myObject' using two different methods

   // print(myObject.prop2);
   // print(myObject['prop2']);

// write a function using a closure that adds two values (x and y) and returns the sum

  // function outerFn(x, y) {
  //    return x + y;
  // }
  //
  //  var newVar = outerFn;

// make the following code work:
// sum(2, 3) // => 5
// sum(2)(3) // => 5

   // function outerFn(x) {
   //     return function(y) {
   //         return x + y;
   //     }
   // }
   //
   // var sum = outerFn;
   //
   // console.log(sum(2, 3));  cannot figure out how to get both envokations to run correctly with only 1 function.
   // console.log(sum(2)(3));


// add a sum method to the array prototype
// var arr = [1,2,3,4]
// arr.sum()  //returns 10
// var arr2 = [10, 28, 14, 33]
// arr2.sum() //returns 85




// write a function that will console log the numbers 1 through 5,
// with delays between each log equaling the logged number.
// delayLog() // pauses 1 second, then logs 1
// pauses 2 seconds after the previous log, then logs 2
// pauses 3 seconds after the previous log, then logs 3
// pauses 4 seconds after the previous log, then logs 4
// pauses 5 seconds after the previous log, then logs 5

  // function delayLog() {
  //     window.setTimeout(console.log(1), 1000);
  //     window.setTimeout(console.log(2), 2000);
  //     window.setTimeout(console.log(3), 3000);
  //     window.setTimeout(console.log(4), 4000);
  //     window.setTimeout(console.log(5), 5000);
  // }
  //
  // delayLog();


 // write a function that takes in an array of numbers and determines whether those numbers are in order
 // ordered( [1, 2, 3, 7, 12] ) // true
 // ordered( [4, 9, 42, 22, 56] ) // false

    // function checkCorrectOrder(array) {
    //     if (array === array.sort()) {  //this only sorts lexical(alphabetically).  needs a function inserted to change to numerically.
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    //
    // console.log(checkCorrectOrder([1, 2, 3, 7, 12]));
    // console.log(checkCorrectOrder([4, 9, 42, 22, 56]));

// you are given an array of values.
// sum every number value in the array, and any nested arrays (to any depth).
// ignore all other types of values.
// arraySum([2, 3]) // 5
// arraySum([4, 4, [3, 2]) // 13
